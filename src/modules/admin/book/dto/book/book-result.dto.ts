import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  bookCefrEquivalentEnum,
  bookLanguageEnum,
  bookLevelEnum,
  bookTargetProgramEnum,
} from "@db/tables/book.table";

export class BookResultDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiPropertyOptional({ nullable: true })
  author: string | null;

  @ApiPropertyOptional({ nullable: true })
  publisher: string | null;

  @ApiProperty()
  institution: string;

  @ApiPropertyOptional({ nullable: true })
  edition: string | null;

  @ApiProperty({ enum: bookLevelEnum.enumValues })
  level: (typeof bookLevelEnum.enumValues)[number];

  @ApiPropertyOptional({ nullable: true })
  subLevel: number | null;

  @ApiProperty({ enum: bookLanguageEnum.enumValues })
  language: (typeof bookLanguageEnum.enumValues)[number];

  @ApiProperty({ enum: bookTargetProgramEnum.enumValues })
  targetProgram: (typeof bookTargetProgramEnum.enumValues)[number];

  @ApiPropertyOptional({
    enum: bookCefrEquivalentEnum.enumValues,
    nullable: true,
  })
  cefrEquivalent: (typeof bookCefrEquivalentEnum.enumValues)[number] | null;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiPropertyOptional({ nullable: true })
  deletedAt: Date | null;
}
