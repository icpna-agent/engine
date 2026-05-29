import { PartialType } from "@nestjs/swagger";
import { BookPanelCreateDto } from "./book-panel-create.dto";

export class BookPanelUpdateDto extends PartialType(BookPanelCreateDto) {}
