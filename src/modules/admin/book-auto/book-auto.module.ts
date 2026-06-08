import { Module } from "@nestjs/common";
import { BookAutoController } from "./book-auto.controller";
import { BookAutoService } from "./book-auto.service";
import { StorageModule } from "../storage/storage.module";
import { BookModule } from "../book/book.module";
import { BookAiModule } from "../book-ai/book-ai.module";

@Module({
  imports: [StorageModule, BookModule, BookAiModule],
  controllers: [BookAutoController],
  providers: [BookAutoService],
  exports: [BookAutoService],
})
export class BookAutoModule {}
