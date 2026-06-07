import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class BookPreviewDto {
  @ApiProperty({
    description: "Imagen en formato Base64 o URL",
    example: "data:image/jpeg;base64,...",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({
    description: "ID del libro al que corresponden los inserts",
    example: 3,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  bookId?: number;

  @ApiProperty({
    description: "Número de página real del libro para pre-popular los registros",
    example: 1,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  bookPage?: number;
}
