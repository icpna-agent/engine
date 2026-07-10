/// <reference types="multer" />
import { Injectable, InternalServerErrorException, StreamableFile } from '@nestjs/common';
import { BlobServiceClient } from '@azure/storage-blob';
import { Readable } from 'stream';
import { UploadResultDto, UploadImageMetaResultDto, UploadAudioMetaResultDto } from './dto/upload-result.dto';
import { UploadAudioUrlDto } from './dto/upload-audio-url.dto';

@Injectable()
export class StorageService {
  private readonly containerName: string;
  private readonly blobServiceClient: BlobServiceClient;

  constructor() {
    const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
    this.containerName = process.env.AZURE_CONTAINER_NAME || 'storage';

    if (!connectionString) {
      throw new Error('Azure Storage Connection String is missing');
    }

    this.blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
  }

  async uploadImage(file: Express.Multer.File) {
    try {
      const uploaded = await this.uploadBufferToAzure({
        buffer: file.buffer,
        originalName: file.originalname,
        mimeType: file.mimetype,
        folder: 'book-images',
      });

      return {
        success: true,
        data: {
          name: uploaded.nameWithoutExt,
          extension: uploaded.extension,
          width: 0,
          height: 0,
          size: file.size,
          time: Date.now(),
          expiration: 0,
          likes: 0,
          description: null,
          original_filename: file.originalname,
          is_animated: 0,
          id_encoded: uploaded.publicId,
          extension_name: uploaded.extension,
          size_formatted: `${file.size} B`,
          filename: uploaded.filename,
          url: uploaded.url,
          url_short: uploaded.url,
          url_seo: uploaded.url,
          url_viewer: uploaded.url,
          url_viewer_preview: uploaded.url,
          url_viewer_thumb: uploaded.url,
          image: {
            filename: uploaded.filename,
            name: uploaded.nameWithoutExt,
            mime: file.mimetype,
            extension: uploaded.extension,
            url: uploaded.url,
            size: file.size,
          },
          thumb: {
            filename: uploaded.filename,
            name: uploaded.nameWithoutExt,
            mime: file.mimetype,
            extension: uploaded.extension,
            url: uploaded.url,
            size: file.size,
          },
          medium: {
            filename: uploaded.filename,
            name: uploaded.nameWithoutExt,
            mime: file.mimetype,
            extension: uploaded.extension,
            url: uploaded.url,
            size: file.size,
          },
          display_url: uploaded.url,
          display_width: 0,
          display_height: 0,
          views_label: '0',
          likes_label: '0',
          how_long_ago: 'just now',
          date_fixed_peer: new Date().toISOString(),
          title: uploaded.filename,
          title_truncated: uploaded.filename,
          title_truncated_html: uploaded.filename,
          is_use_loader: false,
        },
      };
    } catch (error) {
      console.error('Azure Image Upload Error:', error);
      throw new InternalServerErrorException(
        `Error uploading image to Azure Storage: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  async uploadImageToMeta(file: Express.Multer.File): Promise<UploadImageMetaResultDto> {
    const uploadResult = await this.uploadImage(file);
    return {
      success: true,
      url: uploadResult.data.url,
      metaMediaId: null,
    };
  }

  async uploadAudioUrlToMeta(dto: UploadAudioUrlDto): Promise<UploadAudioMetaResultDto> {
    // 1. Download audio file from URL
    let audioBuffer: Buffer;
    let contentType = 'audio/mpeg';
    let originalName = this.getFilenameFromUrl(dto.url, 'audio.mp3');
    try {
      const response = await fetch(dto.url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      contentType = response.headers.get('content-type') || 'audio/mpeg';
      originalName = this.getFilenameFromUrl(response.url || dto.url, originalName);
      const arrayBuffer = await response.arrayBuffer();
      audioBuffer = Buffer.from(arrayBuffer);
    } catch (error) {
      throw new InternalServerErrorException(
        `No se pudo descargar el archivo de audio desde la URL: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }

    // 2. Persist audio in Azure before the source URL expires
    let azureAudioUrl: string;
    try {
      const uploadedAudio = await this.uploadBufferToAzure({
        buffer: audioBuffer,
        originalName,
        mimeType: contentType,
        folder: 'book-audios',
      });
      azureAudioUrl = uploadedAudio.url;
    } catch (error) {
      console.error('Azure Audio Upload Error:', error);
      throw new InternalServerErrorException(
        `Error uploading audio to Azure Storage: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }

    return {
      success: true,
      url: azureAudioUrl,
      metaMediaId: null,
    };
  }

  async download(publicId: string): Promise<StreamableFile> {
    try {
      const decodedPath = decodeURIComponent(publicId);
      const containerClient = this.blobServiceClient.getContainerClient(this.containerName);
      const blockBlobClient = containerClient.getBlockBlobClient(decodedPath);

      const downloadResponse = await blockBlobClient.download(0);
      const stream = downloadResponse.readableStreamBody;

      if (!stream) {
        throw new Error('No readable stream found in Azure download response');
      }

      return new StreamableFile(stream as Readable, {
        type: downloadResponse.contentType || 'application/octet-stream',
        disposition: `inline; filename="${decodedPath.split('/').pop()}"`,
      });
    } catch (error) {
      console.error('Azure Download Error:', error);
      throw new InternalServerErrorException('Error al descargar archivo de Azure Storage');
    }
  }

  private async uploadBufferToAzure(params: {
    buffer: Buffer;
    originalName: string;
    mimeType: string;
    folder: string;
  }) {
    const extension = this.getExtension(params.originalName, params.mimeType);
    const nameWithoutExt = this.sanitizeFilename(
      params.originalName.substring(0, params.originalName.lastIndexOf('.')) || params.originalName,
    );
    const filename = `${nameWithoutExt}_${Date.now()}.${extension}`;
    const blobPath = params.folder ? `${params.folder}/${filename}` : filename;

    const containerClient = this.blobServiceClient.getContainerClient(this.containerName);
    await containerClient.createIfNotExists({ access: 'blob' });
    await containerClient.setAccessPolicy('blob');

    const blockBlobClient = containerClient.getBlockBlobClient(blobPath);
    await blockBlobClient.uploadData(params.buffer, {
      blobHTTPHeaders: {
        blobContentType: params.mimeType,
        blobContentDisposition: `inline; filename="${filename}"`,
      },
    });

    return {
      publicId: blobPath,
      url: blockBlobClient.url,
      filename,
      nameWithoutExt,
      extension,
    };
  }

  private getFilenameFromUrl(url: string, fallback: string): string {
    try {
      const parsedUrl = new URL(url);
      const filename = decodeURIComponent(parsedUrl.pathname.split('/').pop() || '');
      return filename || fallback;
    } catch {
      return fallback;
    }
  }

  private getExtension(filename: string, mimeType: string): string {
    const extension = filename.includes('.') ? filename.split('.').pop() : undefined;
    if (extension) return this.sanitizeFilename(extension).toLowerCase();

    const extensionByMimeType: Record<string, string> = {
      'audio/mpeg': 'mp3',
      'audio/mp3': 'mp3',
      'audio/wav': 'wav',
      'audio/ogg': 'ogg',
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/webp': 'webp',
    };

    return extensionByMimeType[mimeType.split(';')[0].trim().toLowerCase()] || 'bin';
  }

  private sanitizeFilename(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9._-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      || 'file';
  }
}
