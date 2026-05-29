import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class BookAudioResultDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  audioIndex: string;

  @ApiPropertyOptional({ nullable: true })
  transcription: string | null;

  @ApiProperty()
  bookPage: number;

  @ApiPropertyOptional({ nullable: true })
  metaMediaId: number | null;

  @ApiProperty()
  bookId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiPropertyOptional({ nullable: true })
  deletedAt: Date | null;
}
