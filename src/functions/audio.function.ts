import ffmpegPath from 'ffmpeg-static';
import { spawn } from 'child_process';

/**
 * Convierte un buffer PCM a un buffer WAV con el encabezado correcto.
 */
export const pcmToWav = (pcmBuffer: Buffer, sampleRate: number): Buffer => {
  const numChannels = 1;
  const byteRate = sampleRate * numChannels * 2;
  const blockAlign = numChannels * 2;
  const dataSize = pcmBuffer.length;

  const wavBuffer = Buffer.alloc(44 + dataSize);

  // RIFF chunk descriptor
  wavBuffer.write('RIFF', 0);
  wavBuffer.writeUInt32LE(36 + dataSize, 4);
  wavBuffer.write('WAVE', 8);

  // fmt sub-chunk
  wavBuffer.write('fmt ', 12);
  wavBuffer.writeUInt32LE(16, 16);
  wavBuffer.writeUInt16LE(1, 20);
  wavBuffer.writeUInt16LE(numChannels, 22);
  wavBuffer.writeUInt32LE(sampleRate, 24);
  wavBuffer.writeUInt32LE(byteRate, 28);
  wavBuffer.writeUInt16LE(blockAlign, 32);
  wavBuffer.writeUInt16LE(16, 34);

  // data sub-chunk
  wavBuffer.write('data', 36);
  wavBuffer.writeUInt32LE(dataSize, 40);

  // Copiar los datos PCM
  pcmBuffer.copy(wavBuffer, 44);

  return wavBuffer;
};

/**
 * Convierte un buffer WAV a un buffer MP3 usando ffmpeg.
 */
export const convertWavToMp3 = async (wavBuffer: Buffer): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    if (!ffmpegPath) return reject(new Error('ffmpeg no encontrado'));
    const ffmpeg = spawn(ffmpegPath, [
      '-i', 'pipe:0',
      '-f', 'mp3',
      'pipe:1'
    ]);

    const chunks: Buffer[] = [];
    ffmpeg.stdout.on('data', (chunk) => chunks.push(chunk));
    ffmpeg.on('close', (code) => {
      if (code === 0) resolve(Buffer.concat(chunks));
      else reject(new Error(`Error convirtiendo audio con ffmpeg (código ${code})`));
    });
    
    ffmpeg.stdin.write(wavBuffer);
    ffmpeg.stdin.end();
  });
};
