import { Injectable, MessageEvent } from "@nestjs/common";
import { chromium } from "playwright";
import { Observable } from "rxjs";
import { BookCaptureDto } from "./dto/book-capture.dto";
import { BookCaptureEventDto } from "./dto/book-capture-event.dto";
import { InsertIaDto } from "./dto/insert-ia.dto";
import { StorageService } from "../storage/storage.service";
import { BookService } from "../book/book.service";
import { BookAiService } from "../book-ai/book-ai.service";

@Injectable()
export class BookAutoService {
  constructor(
    private readonly storageService: StorageService,
    private readonly bookService: BookService,
    private readonly bookAiService: BookAiService,
  ) {}
  captureBookPages(options: BookCaptureDto): Observable<BookCaptureEventDto> {
    const { bookUrl, startDomPage, endDomPage, pageOffset } = options;

    return new Observable<BookCaptureEventDto>((subscriber) => {
      let isCancelled = false;
      let browser: any = null;

      const run = async () => {
        const totalPages = endDomPage - startDomPage + 1;
        subscriber.next({ type: "start", data: { totalPages } });

        browser = await chromium.launch({
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });

        const context = await browser.newContext({
          viewport: {
            width: 1398,
            height: 1185,
          },
          deviceScaleFactor: 2,
        });

        for (let domPage = startDomPage; domPage <= endDomPage; domPage++) {
          if (isCancelled) break;
          const page = await context.newPage();
          try {
            const visibleHashPage = domPage % 2 === 0 ? domPage + 1 : domPage;
            const realPage = domPage - pageOffset;
            const fileName = `page_${String(realPage).padStart(3, "0")}.jpg`;
            const url = `${bookUrl}#p=${visibleHashPage}`;

            await page.goto(url, {
              waitUntil: "domcontentloaded",
              timeout: 60_000,
            });

            await page.waitForLoadState("networkidle", {
              timeout: 15_000,
            }).catch(() => null);

            // Esperar 2 segundos para que las animaciones y la renderización finalicen
            await page.waitForTimeout(2000);

            if (isCancelled) break;

            const selector = `#page${domPage}`;
            const pageElement = page.locator(selector);

            await pageElement.waitFor({
              state: "visible",
              timeout: 20_000,
            });

            await pageElement.scrollIntoViewIfNeeded();

            // Detect if the page contains audio components
            let hasAudio = false;
            try {
              const audioCount = await pageElement.locator(".leo-comp--audio-player, [id^='Soundplayer']").count();
              hasAudio = audioCount > 0;
            } catch (error: unknown) {
              console.error("Error detecting audio components on page:", error);
            }

            const buffer = await pageElement.screenshot({
              type: "jpeg",
              quality: 95,
              timeout: 30_000,
            });

            if (isCancelled) break;

            subscriber.next({
              type: "page",
              data: {
                domPage,
                realPage,
                fileName,
                base64: buffer.toString("base64"),
                progress: Math.round(((domPage - startDomPage + 1) / totalPages) * 100),
                hasAudio,
              },
            });
          } finally {
            await page.close();
          }
        }

        if (!isCancelled) {
          subscriber.next({ type: "complete", data: { message: "Capture completed" } });
          subscriber.complete();
        }
      };

      run().catch((error) => {
        if (!isCancelled) {
          console.error("Error in captureBookPages SSE:", error);
          subscriber.next({ type: "error", data: { message: error.message || String(error) } });
          subscriber.error(error);
        }
      });

      return () => {
        isCancelled = true;
        if (browser) {
          browser.close().catch((err) => console.error("Error closing browser on unsubscribe:", err));
        }
      };
    });
  }

  insertIa(dto: InsertIaDto): Observable<MessageEvent> {
    return new Observable<MessageEvent>((subscriber) => {
      let isCancelled = false;

      const run = async () => {
        try {
          if (isCancelled) {
            return;
          }

          // 1. Register page image only if it does not already exist
          subscriber.next({
            type: "progress",
            data: JSON.stringify({ message: "Validando imagen de página..." }),
          });

          const existingImage = await this.bookService.findActiveBookImageByBookAndPage(
            dto.bookId,
            dto.bookPage,
          );

          if (existingImage) {
            subscriber.next({
              type: "progress",
              data: JSON.stringify({
                message: `La imagen de la página ${dto.bookPage} ya existe. Se omite la subida.`,
              }),
            });
          } else {
            subscriber.next({
              type: "progress",
              data: JSON.stringify({ message: "Subiendo imagen..." }),
            });

            let base64Image = dto.image;
            let mimeType = "image/jpeg";
            let extension = "jpg";
            if (base64Image.startsWith("data:")) {
              const match = base64Image.match(/^data:([^;]+);base64,(.+)$/);
              if (match) {
                mimeType = match[1];
                base64Image = match[2];
                extension = mimeType.split("/")[1] || "jpg";
              }
            }
            const buffer = Buffer.from(base64Image, "base64");
            const file: Express.Multer.File = {
              buffer,
              originalname: `page_${dto.bookPage}.${extension}`,
              mimetype: mimeType,
              size: buffer.length,
              fieldname: "file",
              encoding: "7bit",
              destination: "",
              filename: "",
              path: "",
              stream: null as any,
            };

            const uploadResult = await this.storageService.uploadImageToMeta(file);

            if (isCancelled) {
              return;
            }

            await this.bookService.createBookImage({
              bookId: dto.bookId,
              bookPage: dto.bookPage,
              url: uploadResult.url,
              metaMediaId: undefined,
            });
          }

          if (isCancelled) {
            return;
          }

          // 3. Process AI detection for each badge
          const previewDto = {
            image: dto.image,
            bookId: dto.bookId,
            bookPage: dto.bookPage,
          };

          for (const badge of dto.badges) {
            if (isCancelled) {
              return;
            }

            if (badge === "index") {
              subscriber.next({
                type: "progress",
                data: JSON.stringify({ message: "Creando Índices..." }),
              });
              const items = await this.bookAiService.previewBookIndex(previewDto);
              for (const item of items) {
                if (isCancelled) return;
                await this.bookService.createBookIndex(item);
              }
            } else if (badge === "unit") {
              subscriber.next({
                type: "progress",
                data: JSON.stringify({ message: "Creando Unidades..." }),
              });
              const items = await this.bookAiService.previewBookUnit(previewDto);
              for (const item of items) {
                if (isCancelled) return;
                await this.bookService.createBookUnit(item);
              }
            } else if (badge === "lesson") {
              subscriber.next({
                type: "progress",
                data: JSON.stringify({ message: "Creando Lecciones..." }),
              });
              const items = await this.bookAiService.previewBookLesson(previewDto);
              for (const item of items) {
                if (isCancelled) return;
                await this.bookService.createBookLesson(item);
              }
            } else if (badge === "panel") {
              subscriber.next({
                type: "progress",
                data: JSON.stringify({ message: "Creando Paneles..." }),
              });
              const items = await this.bookAiService.previewBookPanel(previewDto);
              for (const item of items) {
                if (isCancelled) return;
                await this.bookService.createBookPanel(item);
              }
            } else if (badge === "audio") {
              subscriber.next({
                type: "progress",
                data: JSON.stringify({ message: "Creando Audios..." }),
              });
              const items = await this.bookAiService.previewBookAudio(previewDto);
              for (const item of items) {
                if (isCancelled) return;
                await this.bookService.createBookAudio(item);
              }
            }
          }

          if (isCancelled) {
            return;
          }
          subscriber.next({
            type: "complete",
            data: JSON.stringify({ message: `Procesamiento completado para la página ${dto.bookPage}.` }),
          });
          subscriber.complete();
        } catch (error) {
          if (!isCancelled) {
            subscriber.next({
              type: "error",
              data: JSON.stringify({
                message: error instanceof Error ? error.message : String(error),
              }),
            });
            subscriber.error(error);
          }
        }
      };

      run();

      return () => {
        isCancelled = true;
      };
    });
  }
}
