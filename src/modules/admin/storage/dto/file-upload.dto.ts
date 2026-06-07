/// <reference types="multer" />
import { ApiProperty } from '@nestjs/swagger';

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary', description: 'Archivo de imagen a subir' })
  file!: Express.Multer.File;
}
