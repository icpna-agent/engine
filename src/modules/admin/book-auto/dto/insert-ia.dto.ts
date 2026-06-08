import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";

export class InsertIaDto {
  @ApiProperty({ example: 1, description: "ID del libro" })
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  bookId: number;

  @ApiProperty({ example: 2, description: "Número de la página real del libro" })
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  bookPage: number;

  @ApiProperty({ example: "data:image/jpeg;base64,...", description: "Imagen de la página en base64" })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({ example: ["lesson", "panel"], description: "Badges/elementos a analizar e insertar" })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  badges: string[];
}
