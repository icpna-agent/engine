import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsUrl } from "class-validator";

export class BookImageCreateDto {
  @ApiProperty({ example: "https://example.com/images/book-7-page-2.png" })
  @IsUrl()
  @IsNotEmpty()
  url: string;

  @ApiProperty({ example: 2 })
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  bookPage: number;

  @ApiPropertyOptional({ example: 321 })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  metaMediaId?: number;

  @ApiProperty({ example: 1 })
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  bookId: number;
}
