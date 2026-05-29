import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { BookRepository } from "@repositories/book.repository";
import { BookIndexRepository } from "@repositories/book-index.repository";
import { BookUnitRepository } from "@repositories/book-unit.repository";
import { BookLessonRepository } from "@repositories/book-lesson.repository";
import { BookPanelRepository } from "@repositories/book-panel.repository";
import { BookAudioRepository } from "@repositories/book-audio.repository";
import { BookImageRepository } from "@repositories/book-image.repository";

@Module({
  controllers: [BookController],
  providers: [
    BookService,
    BookRepository,
    BookIndexRepository,
    BookUnitRepository,
    BookLessonRepository,
    BookPanelRepository,
    BookAudioRepository,
    BookImageRepository,
  ],
  exports: [BookService, BookRepository],
})
export class BookModule {}
