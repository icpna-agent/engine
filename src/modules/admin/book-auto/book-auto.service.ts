import { Injectable } from "@nestjs/common";
import { chromium } from "playwright";
import { Observable } from "rxjs";
import { BookCaptureDto } from "./dto/book-capture.dto";
import { BookCaptureEventDto } from "./dto/book-capture-event.dto";

@Injectable()
export class BookAutoService {
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

            console.log(`Abriendo ${url}`);
            console.log(`Capturando #page${domPage} como ${fileName}`);

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
}
