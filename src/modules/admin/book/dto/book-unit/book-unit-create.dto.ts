import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class BookUnitCreateDto {
  @ApiProperty({ example: 7 })
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  number: number;

  @ApiProperty({ example: "Is This Yours?" })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({
    example: ["Quantifiers", "Using one & ones", "Articles"],
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  grammar?: string[];

  @ApiPropertyOptional({
    example: ["Belongings", "Organization", "Toys & games"],
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  vocabulary?: string[];

  @ApiPropertyOptional({
    example: ["Say Yes to Mess", "The history of three objects"],
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readingListening?: string[];

  @ApiPropertyOptional({
    example: ["One/ones", "Intonation: Stress"],
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  pronunciation?: string[];

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
