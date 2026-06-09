import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from "class-validator";

export class BookPanelCreateDto {
  @ApiProperty({ example: "Quantifiers" })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ example: "Grammar" })
  @IsString()
  @IsOptional()
  theme?: string;

  @ApiPropertyOptional({ example: "Large and small quantity" })
  @IsString()
  @IsOptional()
  subTheme?: string;

  @ApiPropertyOptional({
    example: "Complete the grammar panel with a few, a little, many and much.",
  })
  @IsString()
  @IsOptional()
  instruction?: string;

  @ApiPropertyOptional({ example: "Some additional text or panel content" })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({ example: 5 })
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
