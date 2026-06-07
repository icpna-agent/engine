/// <reference types="multer" />
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as crypto from 'crypto';
import { database } from '@db/connection.db';
import { instance } from '@db/tables/instance.table';
import { isNull } from 'drizzle-orm';
import { WhatsAppClient } from '../../../wb/messages/whatsapp-cloud-api';
import { UploadResultDto, FreeImageResultDto, UploadImageMetaResultDto, UploadAudioMetaResultDto } from './dto/upload-result.dto';
import { UploadAudioUrlDto } from './dto/upload-audio-url.dto';

@Injectable()
export class StorageService {
  private readonly API_URL = 'https://freeimage.host/json';

  async uploadImage(file: Express.Multer.File) {
    try {
      // 1. Generate timestamp and auth_token
      const timestamp = Date.now().toString();
      const authToken = crypto
        .createHash('sha1')
        .update(`${timestamp}freeimagehost`)
        .digest('hex');

      // 2. Prepare FormData
      const formData = new FormData();
      const blob = new Blob([new Uint8Array(file.buffer)], { type: file.mimetype });
      formData.append('source', blob, file.originalname);
      formData.append('type', 'file');
      formData.append('action', 'upload');
      formData.append('timestamp', timestamp);
      formData.append('auth_token', authToken);

      // 3. Send Request
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          origin: 'https://freeimage.host',
          referer: 'https://freeimage.host/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.status_code !== 200) {
        throw new Error(result.error?.message || 'Error uploading image to provider');
      }

      return {
        success: true,
        data: result.image,
      };
    } catch (error) {
      console.error('Upload Error:', error);
      throw new InternalServerErrorException(
        `Error uploading image: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  async uploadImageToMeta(file: Express.Multer.File): Promise<UploadImageMetaResultDto> {
    // 1. Upload to freeimage.host to get public URL
    const uploadResult = await this.uploadImage(file);
    const url = uploadResult.data.url;

    // 2. Query meta instance from database
    const activeInstances = await database
      .select()
      .from(instance)
      .where(isNull(instance.deletedAt));
    const firstInstance = activeInstances[0];
    if (!firstInstance || !firstInstance.token || !firstInstance.phone_number_id) {
      throw new InternalServerErrorException(
        'No se encontró una instancia activa de Meta (WhatsApp Cloud API) en la base de datos.'
      );
    }

    try {
      // 3. Instantiate WhatsAppClient
      const whatsappClient = new WhatsAppClient({
        accessToken: firstInstance.token,
        phoneNumberId: firstInstance.phone_number_id,
        wabaId: firstInstance.waba_id || undefined,
      });

      // 4. Convert Multer buffer to Blob
      const blob = new Blob([new Uint8Array(file.buffer)], { type: file.mimetype });

      // 5. Upload to Meta
      const metaResult = await whatsappClient.uploadImage({
        messaging_product: 'whatsapp',
        file: blob,
      });

      return {
        success: true,
        url,
        metaMediaId: metaResult.id,
      };
    } catch (error) {
      console.error('Meta Image Upload Error:', error);
      throw new InternalServerErrorException(
        `Error uploading image to Meta: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  async uploadAudioUrlToMeta(dto: UploadAudioUrlDto): Promise<UploadAudioMetaResultDto> {
    // 1. Download audio file from URL
    let audioBuffer: Buffer;
    let contentType = 'audio/mpeg';
    try {
      const response = await fetch(dto.url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      contentType = response.headers.get('content-type') || 'audio/mpeg';
      const arrayBuffer = await response.arrayBuffer();
      audioBuffer = Buffer.from(arrayBuffer);
    } catch (error) {
      throw new InternalServerErrorException(
        `No se pudo descargar el archivo de audio desde la URL: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }

    // 2. Query meta instance from database
    const activeInstances = await database
      .select()
      .from(instance)
      .where(isNull(instance.deletedAt));
    const firstInstance = activeInstances[0];
    if (!firstInstance || !firstInstance.token || !firstInstance.phone_number_id) {
      throw new InternalServerErrorException(
        'No se encontró una instancia activa de Meta (WhatsApp Cloud API) en la base de datos.'
      );
    }

    try {
      // 3. Instantiate WhatsAppClient
      const whatsappClient = new WhatsAppClient({
        accessToken: firstInstance.token,
        phoneNumberId: firstInstance.phone_number_id,
        wabaId: firstInstance.waba_id || undefined,
      });

      // 4. Convert buffer to Blob
      const blob = new Blob([new Uint8Array(audioBuffer)], { type: contentType });

      // 5. Upload to Meta
      const metaResult = await whatsappClient.uploadAudio({
        messaging_product: 'whatsapp',
        file: blob,
      });

      return {
        success: true,
        metaMediaId: metaResult.id,
      };
    } catch (error) {
      console.error('Meta Audio Upload Error:', error);
      throw new InternalServerErrorException(
        `Error uploading audio to Meta: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }
}
