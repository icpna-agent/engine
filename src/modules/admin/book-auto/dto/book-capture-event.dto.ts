import { ApiProperty } from "@nestjs/swagger";

export class BookCaptureStartDataDto {
  @ApiProperty({ example: 44, description: "Total de páginas a capturar" })
  totalPages: number;
}

export class BookCapturePageDataDto {
  @ApiProperty({ example: 5, description: "Número de página en el DOM" })
  domPage: number;

  @ApiProperty({ example: 1, description: "Número de página real calculado" })
  realPage: number;

  @ApiProperty({ example: "page_001.jpg", description: "Nombre del archivo de imagen" })
  fileName: string;

  @ApiProperty({ example: "iVBORw0KGgoAAA...", description: "Imagen capturada codificada en Base64" })
  base64: string;

  @ApiProperty({ example: 2, description: "Progreso del proceso en porcentaje (0-100)" })
  progress: number;

  @ApiProperty({ example: true, description: "Indica si la página contiene reproductores de audio", required: false })
  hasAudio?: boolean;
}

export class BookCaptureCompleteDataDto {
  @ApiProperty({ example: "Capture completed", description: "Mensaje de finalización" })
  message: string;
}

export class BookCaptureErrorDataDto {
  @ApiProperty({ example: "Timeout exceeded", description: "Mensaje de error" })
  message: string;
}

export class BookCaptureEventDto {
  @ApiProperty({ example: "page", enum: ["start", "page", "complete", "error"], description: "Tipo de evento de la captura" })
  type: "start" | "page" | "complete" | "error";

  @ApiProperty({
    description: "Datos asociados al tipo de evento",
  })
  data: BookCaptureStartDataDto | BookCapturePageDataDto | BookCaptureCompleteDataDto | BookCaptureErrorDataDto;
}
