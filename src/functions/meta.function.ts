import { Meta } from '@models/meta.model';
import { MessageMedia } from '@db/tables/message.table';

// Metadata
export function extractPhoneNumberId(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.metadata?.phone_number_id;
}

export function extractDisplayPhoneNumber(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.metadata?.display_phone_number;
}

// Contact
export function extractContactName(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.contacts?.[0]?.profile?.name;
}

export function extractContactWaId(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.contacts?.[0]?.wa_id;
}

// Message basic
export function extractSenderPhone(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.from;
}

export function extractMessageId(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.id;
}

export function extractMessageType(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.type;
}

export function extractTimestamp(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.timestamp;
}

// Text
export function extractTextBody(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.text?.body;
}

// Image
export function extractImageId(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.image?.id;
}

export function extractImageCaption(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.image?.caption;
}

// Document
export function extractDocumentId(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.document?.id;
}

export function extractDocumentFilename(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.document?.filename;
}

export function extractDocumentCaption(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.document?.caption;
}

// Reaction
export function extractReactionEmoji(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.reaction?.emoji;
}

export function extractReactionMessageId(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.reaction?.message_id;
}

// Sticker
export function extractStickerId(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.sticker?.id;
}

export function extractStickerAnimated(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.sticker?.animated;
}

// Context (quoted message)
export function extractContextMessageId(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.context?.id;
}

export function extractContextFrom(meta: Meta) {
  return meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.context?.from;
}

// Validators
export function isTextMessage(meta: Meta): boolean {
  return extractMessageType(meta) === 'text';
}

export function isImageMessage(meta: Meta): boolean {
  return extractMessageType(meta) === 'image';
}

export function isDocumentMessage(meta: Meta): boolean {
  return extractMessageType(meta) === 'document';
}

export function isReactionMessage(meta: Meta): boolean {
  return extractMessageType(meta) === 'reaction';
}

export function isStickerMessage(meta: Meta): boolean {
  return extractMessageType(meta) === 'sticker';
}

export function isAudioMessage(meta: Meta): boolean {
  return extractMessageType(meta) === 'audio';
}

export function extractAudioData(meta: Meta): MessageMedia | null {
  const message = meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
  if (message?.type === 'audio' && message.audio && message.audio.id && message.audio.url && message.audio.mime_type) {
    return {
      id: message.audio.id,
      url: message.audio.url,
      mimeType: message.audio.mime_type,
    };
  }
  return null;
}

export function extractImageData(meta: Meta): MessageMedia | null {
  const message = meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
  if (message?.type === 'image' && message.image && message.image.id && message.image.url && message.image.mime_type) {
    return {
      id: message.image.id,
      url: message.image.url,
      mimeType: message.image.mime_type,
      caption: message.image.caption || undefined,
    };
  }
  return null;
}

export function hasContext(meta: Meta): boolean {
  return !!meta?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.context;
}