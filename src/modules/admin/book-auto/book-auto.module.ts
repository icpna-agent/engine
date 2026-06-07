import { Module } from "@nestjs/common";
import { BookAutoController } from "./book-auto.controller";
import { BookAutoService } from "./book-auto.service";

@Module({
  controllers: [BookAutoController],
  providers: [BookAutoService],
  exports: [BookAutoService],
})
export class BookAutoModule {}
