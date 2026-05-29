import { PartialType } from "@nestjs/swagger";
import { BookIndexCreateDto } from "./book-index-create.dto";

export class BookIndexUpdateDto extends PartialType(BookIndexCreateDto) {}
