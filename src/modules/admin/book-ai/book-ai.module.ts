import { Module } from "@nestjs/common";
import { ClientModule } from "src/features/client/client.module";
import { BookAiController } from "./book-ai.controller";
import { BookAiService } from "./book-ai.service";

@Module({
  imports: [ClientModule],
  controllers: [BookAiController],
  providers: [BookAiService],
  exports: [BookAiService],
})
export class BookAiModule {}
