import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from "class-validator";
import { bookSkillEnum } from "@db/tables/book-index.table";

export class BookLessonCreateDto {
  @ApiProperty({ example: 7.1 })
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  unitNumber: number;

  @ApiProperty({ example: "Say Yes to Mess" })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ enum: bookSkillEnum.enumValues, example: "reading" })
  @IsEnum(bookSkillEnum.enumValues)
  @IsNotEmpty()
  skill: (typeof bookSkillEnum.enumValues)[number];

  @ApiPropertyOptional({ example: "Organization" })
  @IsString()
  @IsOptional()
  topic?: string;

  @ApiPropertyOptional({ example: 1 })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  activityNumber?: number;

  @ApiPropertyOptional({ example: "a" })
  @IsString()
  @IsOptional()
  letterNumber?: string;

  @ApiPropertyOptional({
    example: "Read the article and match statements 1-5 to paragraphs A-E.",
  })
  @IsString()
  @IsOptional()
  instruction?: string;

  @ApiPropertyOptional({ example: "Some additional text or exercises content" })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({ example: 4 })
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  bookPage: number;

  @ApiProperty({ example: 1 })
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  bookId: number;
}
