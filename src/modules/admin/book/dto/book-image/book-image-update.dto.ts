import { PartialType } from "@nestjs/swagger";
import { BookImageCreateDto } from "./book-image-create.dto";

export class BookImageUpdateDto extends PartialType(BookImageCreateDto) {}
