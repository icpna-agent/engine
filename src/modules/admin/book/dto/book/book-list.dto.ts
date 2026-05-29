import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";
import {
  bookCefrEquivalentEnum,
  bookLevelEnum,
  bookTargetProgramEnum,
} from "@db/tables/book.table";
import { PaginationMetaDto } from "../pagination-meta.dto";
import { BookResultDto } from "./book-result.dto";

export class BookListFiltersDto {
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

  @ApiPropertyOptional({ enum: bookLevelEnum.enumValues })
  @IsEnum(bookLevelEnum.enumValues)
  @IsOptional()
  level?: (typeof bookLevelEnum.enumValues)[number];

  @ApiPropertyOptional({ enum: bookTargetProgramEnum.enumValues })
  @IsEnum(bookTargetProgramEnum.enumValues)
  @IsOptional()
  targetProgram?: (typeof bookTargetProgramEnum.enumValues)[number];

  @ApiPropertyOptional({ enum: bookCefrEquivalentEnum.enumValues })
  @IsEnum(bookCefrEquivalentEnum.enumValues)
  @IsOptional()
  cefrEquivalent?: (typeof bookCefrEquivalentEnum.enumValues)[number];

  @ApiPropertyOptional()
  @Type(() => Boolean)
  @IsBoolean()
  @IsOptional()
  active?: boolean;
}

export class BookListDto {
  @ApiProperty({ type: [BookResultDto] })
  data: BookResultDto[];

  @ApiProperty({ type: PaginationMetaDto })
  meta: PaginationMetaDto;
}
