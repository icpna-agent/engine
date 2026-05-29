import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { bookSkillEnum } from "@db/tables/book-index.table";
import { PaginationMetaDto } from "../pagination-meta.dto";
import { BookLessonResultDto } from "./book-lesson-result.dto";

export class BookLessonListFiltersDto {
  @ApiPropertyOptional({ default: 1 })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  page?: number = 1;

  @ApiPropertyOptional({ default: 10 })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  limit?: number = 10;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  search?: string;

  @ApiPropertyOptional()
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  bookId?: number;

  @ApiPropertyOptional({ enum: bookSkillEnum.enumValues })
  @IsEnum(bookSkillEnum.enumValues)
  @IsOptional()
  skill?: (typeof bookSkillEnum.enumValues)[number];

  @ApiPropertyOptional()
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  unitNumber?: number;
}

export class BookLessonListDto {
  @ApiProperty({ type: [BookLessonResultDto] })
  data: BookLessonResultDto[];

  @ApiProperty({ type: PaginationMetaDto })
  meta: PaginationMetaDto;
}
