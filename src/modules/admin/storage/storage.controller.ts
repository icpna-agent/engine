/// <reference types="multer" />
import { Body, Controller, Get, Post, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiBody, ApiOperation, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { StorageService } from './storage.service';
import { UploadResultDto, UploadImageMetaResultDto, UploadAudioMetaResultDto } from './dto/upload-result.dto';
import { FileUploadDto } from './dto/file-upload.dto';
import { UploadAudioUrlDto } from './dto/upload-audio-url.dto';

@ApiTags('storage')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('admin/storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FileUploadDto })
  @ApiOperation({ summary: 'Sube una imagen a Azure Blob Storage' })
  @ApiOkResponse({ type: UploadResultDto, description: 'Imagen subida exitosamente' })
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<UploadResultDto> {
    return this.storageService.uploadImage(file);
  }

  @Post('upload-image-to-meta')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FileUploadDto })
  @ApiOperation({ summary: 'Sube una imagen a Azure Blob Storage. No sube a Meta.' })
  @ApiOkResponse({ type: UploadImageMetaResultDto, description: 'Imagen subida exitosamente a Azure' })
  async uploadImageToMeta(@UploadedFile() file: Express.Multer.File): Promise<UploadImageMetaResultDto> {
    return this.storageService.uploadImageToMeta(file);
  }

  @Post('upload-audio-url-to-meta')
  @ApiOperation({ summary: 'Descarga un audio desde una URL y lo guarda en Azure. No sube a Meta.' })
  @ApiOkResponse({ type: UploadAudioMetaResultDto, description: 'Audio subido exitosamente a Azure' })
  async uploadAudioUrlToMeta(@Body() dto: UploadAudioUrlDto): Promise<UploadAudioMetaResultDto> {
    return this.storageService.uploadAudioUrlToMeta(dto);
  }

  @Get('download-file')
  @ApiOperation({ summary: 'Proxy para descargar/visualizar archivos de Azure' })
  download(@Query('path') path: string) {
    return this.storageService.download(path);
  }
}
