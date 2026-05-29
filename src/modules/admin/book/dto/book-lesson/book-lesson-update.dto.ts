import { PartialType } from "@nestjs/swagger";
import { BookLessonCreateDto } from "./book-lesson-create.dto";

export class BookLessonUpdateDto extends PartialType(BookLessonCreateDto) {}
