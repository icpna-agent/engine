import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from "class-validator";

export class BookAudioCreateDto {
  @ApiProperty({ example: "https://example.com/audio/7.1.mp3" })
  @IsUrl()
  @IsNotEmpty()
  url: string;

  @ApiProperty({ example: "7.1" })
  @IsString()
  @IsNotEmpty()
  audioIndex: string;

  @ApiPropertyOptional({
    example: "Listen to a photographer explaining what the photos represent.",
  })
  @IsString()
  @IsOptional()
  transcription?: string;

  @ApiProperty({ example: 2 })
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  bookPage: number;

  @ApiPropertyOptional({ example: 123 })
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
