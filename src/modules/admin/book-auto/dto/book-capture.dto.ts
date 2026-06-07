import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class BookCaptureDto {
  @ApiProperty({
    example: "https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp8b1p_sb/index.html",
    description: "URL base del flipbook",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  bookUrl: string;

  @ApiProperty({ example: 5, description: "Página de inicio en el DOM" })
  @IsNumber()
  @IsNotEmpty()
  startDomPage: number;

  @ApiProperty({ example: 48, description: "Página final en el DOM" })
  @IsNumber()
  @IsNotEmpty()
  endDomPage: number;

  @ApiProperty({ example: 4, description: "Offset para restar y obtener la numeración real" })
  @IsNumber()
  @IsNotEmpty()
  pageOffset: number;

  @ApiProperty({ example: "eyJhbGciOi...", description: "Token JWT para autenticación SSE", required: false })
  @IsString()
  @IsOptional()
  token?: string;
}
