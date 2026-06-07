import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class UploadAudioUrlDto {
  @ApiProperty({
    example: 'https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp6b1p_sb/files/SlidePage/190213150917177.mp3',
    description: 'URL pública del archivo de audio que se descargará y subirá a Meta',
  })
  @IsUrl({}, { message: 'La URL provista no es válida' })
  @IsNotEmpty({ message: 'La URL del audio es requerida' })
  url!: string;
}
