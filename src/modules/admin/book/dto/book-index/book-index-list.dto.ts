import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { bookSkillEnum } from "@db/tables/book-index.table";
import { PaginationMetaDto } from "../pagination-meta.dto";
import { BookIndexResultDto } from "./book-index-result.dto";

export class BookIndexListFiltersDto {
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
}

export class BookIndexListDto {
  @ApiProperty({ type: [BookIndexResultDto] })
  data: BookIndexResultDto[];

  @ApiProperty({ type: PaginationMetaDto })
  meta: PaginationMetaDto;
}
