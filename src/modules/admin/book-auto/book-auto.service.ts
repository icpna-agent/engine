import { Injectable, MessageEvent } from "@nestjs/common";
import { chromium } from "playwright";
import { Observable } from "rxjs";
import { BookCaptureDto } from "./dto/book-capture.dto";
import { BookCaptureEventDto } from "./dto/book-capture-event.dto";
import { InsertIaDto } from "./dto/insert-ia.dto";
import { StorageService } from "../storage/storage.service";
import { BookService } from "../book/book.service";
import { BookAiService } from "../book-ai/book-ai.service";
import { database } from "@db/connection.db";
import { bookImage } from "@db/tables/book-image.table";
import { and, eq, isNull } from "drizzle-orm";

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
    console.log(`📥 [insertIa] Starting process for bookPage: ${dto.bookPage}, bookId: ${dto.bookId}`);
    console.log(`📂 [insertIa] Badges to process:`, dto.badges);

    return new Observable<MessageEvent>((subscriber) => {
      let isCancelled = false;

      const run = async () => {
        try {
          if (isCancelled) {
            console.log(`⚠️ [insertIa] Process cancelled before starting page: ${dto.bookPage}`);
            return;
          }

          // 1. Upload page to Storage & Meta
          console.log(`🚀 [insertIa] 1. Uploading page image to Storage & Meta...`);
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
          console.log(`✅ [insertIa] Upload to Storage/Meta successful: URL=${uploadResult.url}, metaMediaId=${uploadResult.metaMediaId}`);

          if (isCancelled) {
            console.log(`⚠️ [insertIa] Process cancelled after upload for page: ${dto.bookPage}`);
            return;
          }

          // 2. Register/update in book_image table
          console.log(`💾 [insertIa] 2. Querying/updating book_image database table...`);
          const [existingImage] = await database
             .select()
             .from(bookImage)
             .where(
               and(
                 eq(bookImage.bookId, dto.bookId),
                 eq(bookImage.bookPage, dto.bookPage),
                 isNull(bookImage.deletedAt),
               ),
             );

          const metaMediaId = uploadResult.metaMediaId ? Number(uploadResult.metaMediaId) : undefined;
          if (existingImage) {
            console.log(`💾 [insertIa] Updating existing book_image record with ID ${existingImage.id}`);
            await this.bookService.updateBookImage(existingImage.id, {
              url: uploadResult.url,
              metaMediaId,
            });
          } else {
            console.log(`💾 [insertIa] Inserting new book_image record`);
            await this.bookService.createBookImage({
              bookId: dto.bookId,
              bookPage: dto.bookPage,
              url: uploadResult.url,
              metaMediaId,
            });
          }

          if (isCancelled) {
            console.log(`⚠️ [insertIa] Process cancelled after database registration for page: ${dto.bookPage}`);
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
              console.log(`⚠️ [insertIa] Process cancelled during badge loop for page: ${dto.bookPage}`);
              return;
            }

            console.log(`🤖 [insertIa] 3. Starting AI analysis for badge: "${badge}"...`);

            if (badge === "index") {
              subscriber.next({
                type: "progress",
                data: JSON.stringify({ message: "Creando Índices..." }),
              });
              const items = await this.bookAiService.previewBookIndex(previewDto);
              console.log(`🤖 [insertIa] IA detected ${items.length} index items. Saving to DB...`);
              for (const item of items) {
                if (isCancelled) return;
                await this.bookService.createBookIndex(item);
              }
              console.log(`🤖 [insertIa] Saved index items successfully.`);
            } else if (badge === "unit") {
              subscriber.next({
                type: "progress",
                data: JSON.stringify({ message: "Creando Unidades..." }),
              });
              const items = await this.bookAiService.previewBookUnit(previewDto);
              console.log(`🤖 [insertIa] IA detected ${items.length} unit items. Saving to DB...`);
              for (const item of items) {
                if (isCancelled) return;
                await this.bookService.createBookUnit(item);
              }
              console.log(`🤖 [insertIa] Saved unit items successfully.`);
            } else if (badge === "lesson") {
              subscriber.next({
                type: "progress",
                data: JSON.stringify({ message: "Creando Lecciones..." }),
              });
              console.log(`🤖 [insertIa] Calling bookAiService.previewBookLesson...`);
              const items = await this.bookAiService.previewBookLesson(previewDto);
              console.log(`🤖 [insertIa] IA detected ${items.length} lesson items. Saving to DB...`);
              for (const item of items) {
                if (isCancelled) return;
                await this.bookService.createBookLesson(item);
              }
              console.log(`🤖 [insertIa] Saved lesson items successfully.`);
            } else if (badge === "panel") {
              subscriber.next({
                type: "progress",
                data: JSON.stringify({ message: "Creando Paneles..." }),
              });
              const items = await this.bookAiService.previewBookPanel(previewDto);
              console.log(`🤖 [insertIa] IA detected ${items.length} panel items. Saving to DB...`);
              for (const item of items) {
                if (isCancelled) return;
                await this.bookService.createBookPanel(item);
              }
              console.log(`🤖 [insertIa] Saved panel items successfully.`);
            } else if (badge === "audio") {
              subscriber.next({
                type: "progress",
                data: JSON.stringify({ message: "Creando Audios..." }),
              });
              const items = await this.bookAiService.previewBookAudio(previewDto);
              console.log(`🤖 [insertIa] IA detected ${items.length} audio items. Saving to DB...`);
              for (const item of items) {
                if (isCancelled) return;
                await this.bookService.createBookAudio(item);
              }
              console.log(`🤖 [insertIa] Saved audio items successfully.`);
            }
          }

          if (isCancelled) {
            console.log(`⚠️ [insertIa] Process cancelled at final completion for page: ${dto.bookPage}`);
            return;
          }
          console.log(`✅ [insertIa] Process fully completed successfully for page: ${dto.bookPage}`);
          subscriber.next({
            type: "complete",
            data: JSON.stringify({ message: `Procesamiento completado para la página ${dto.bookPage}.` }),
          });
          subscriber.complete();
        } catch (error) {
          if (!isCancelled) {
            console.error("❌ [insertIa] Error in process:", error);
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
        console.log(`⚠️ [insertIa] Subscriber unsubscribed / connection closed by client.`);
        isCancelled = true;
      };
    });
  }
}
