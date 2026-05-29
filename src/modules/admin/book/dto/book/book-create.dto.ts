import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import {
  bookCefrEquivalentEnum,
  bookLanguageEnum,
  bookLevelEnum,
  bookTargetProgramEnum,
} from "@db/tables/book.table";

export class BookCreateDto {
  @ApiProperty({ example: "American Big Picture" })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ example: "Ben Goldstein" })
  @IsString()
  @IsOptional()
  author?: string;

  @ApiPropertyOptional({ example: "Richmond" })
  @IsString()
  @IsOptional()
  publisher?: string;

  @ApiProperty({ example: "ICPNA", default: "ICPNA" })
  @IsString()
  @IsNotEmpty()
  institution: string;

  @ApiPropertyOptional({ example: "Intermediate 7" })
  @IsString()
  @IsOptional()
  edition?: string;

  @ApiProperty({ enum: bookLevelEnum.enumValues, example: "intermediate" })
  @IsEnum(bookLevelEnum.enumValues)
  @IsNotEmpty()
  level: (typeof bookLevelEnum.enumValues)[number];

  @ApiPropertyOptional({ example: 7 })
  @IsNumber()
  @IsOptional()
  subLevel?: number;

  @ApiProperty({ enum: bookLanguageEnum.enumValues, example: "english" })
  @IsEnum(bookLanguageEnum.enumValues)
  @IsNotEmpty()
  language: (typeof bookLanguageEnum.enumValues)[number];

  @ApiProperty({ enum: bookTargetProgramEnum.enumValues, example: "adults" })
  @IsEnum(bookTargetProgramEnum.enumValues)
  @IsNotEmpty()
  targetProgram: (typeof bookTargetProgramEnum.enumValues)[number];

  @ApiPropertyOptional({
    enum: bookCefrEquivalentEnum.enumValues,
    example: "b1",
  })
  @IsEnum(bookCefrEquivalentEnum.enumValues)
  @IsOptional()
  cefrEquivalent?: (typeof bookCefrEquivalentEnum.enumValues)[number];

  @ApiProperty({ example: true, default: true })
  @IsBoolean()
  active: boolean;
}
