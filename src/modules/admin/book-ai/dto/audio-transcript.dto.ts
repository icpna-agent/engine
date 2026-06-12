import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUrl } from "class-validator";

export class AudioTranscriptDto {
  @ApiProperty({
    description: "URL pública del archivo de audio a transcribir",
    example: "https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp6b1p_sb/files/SlidePage/190213150917177.mp3",
    required: true,
  })
  @IsUrl({}, { message: "La URL provista no es válida" })
  @IsNotEmpty({ message: "La URL del audio es requerida" })
  url: string;
}

export class AudioTranscriptResultDto {
  @ApiProperty({
    description: "Transcripción del audio obtenida exitosamente",
    example: "Well, the computer screen is an easy one to analyze...",
  })
  transcription: string;
}
