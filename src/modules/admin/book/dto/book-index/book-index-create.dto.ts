import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { bookSkillEnum } from "@db/tables/book-index.table";

export class BookIndexCreateDto {
  @ApiProperty({ example: "Units 7-9" })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: "page 2" })
  @IsString()
  @IsNotEmpty()
  page: string;

  @ApiProperty({ enum: bookSkillEnum.enumValues, example: "grammar" })
  @IsEnum(bookSkillEnum.enumValues)
  @IsNotEmpty()
  skill: (typeof bookSkillEnum.enumValues)[number];

  @ApiProperty({ example: 2 })
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
