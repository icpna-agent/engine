import { PartialType } from "@nestjs/swagger";
import { BookUnitCreateDto } from "./book-unit-create.dto";

export class BookUnitUpdateDto extends PartialType(BookUnitCreateDto) {}
