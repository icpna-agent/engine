import { PartialType } from "@nestjs/swagger";
import { BookAudioCreateDto } from "./book-audio-create.dto";

export class BookAudioUpdateDto extends PartialType(BookAudioCreateDto) {}
