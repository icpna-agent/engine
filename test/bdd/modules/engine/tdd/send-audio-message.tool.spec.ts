import { afterEach, beforeEach, describe, expect, it, jest } from "@jest/globals";

const uploadAudioMock = jest.fn() as any;
const sendAudioMessageByIdMock = jest.fn() as any;
const pcmToWavMock = jest.fn() as any;
const convertWavToMp3Mock = jest.fn() as any;

jest.mock("src/wb/messages/whatsapp-cloud-api", () => ({
  WhatsAppClient: jest.fn().mockImplementation(() => ({
    uploadAudio: uploadAudioMock,
    sendAudioMessageById: sendAudioMessageByIdMock,
  })),
}));

jest.mock("@functions/audio.function", () => ({
  pcmToWav: pcmToWavMock,
  convertWavToMp3: convertWavToMp3Mock,
}));

import { createSendAudioMessageTool } from "../../../../../src/modules/admin/engine/tools/send-audio-message.tool";

describe("createSendAudioMessageTool", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "error").mockImplementation(() => undefined);
    pcmToWavMock.mockReturnValue(Buffer.from("wav"));
    convertWavToMp3Mock.mockResolvedValue(Buffer.from("mp3"));
    uploadAudioMock.mockResolvedValue({ id: "meta-audio-id" });
    sendAudioMessageByIdMock.mockResolvedValue({ messages: [] });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("genera audio con IA, lo sube a Meta y registra el template enviado", async () => {
    const templates: any[] = [];
    const genAI = {
      models: {
        generateContent: (jest.fn() as any).mockResolvedValue({
          candidates: [
            {
              content: {
                parts: [
                  {
                    inlineData: {
                      data: Buffer.from("pcm").toString("base64"),
                      mimeType: "audio/pcm;rate=24000",
                    },
                  },
                ],
              },
            },
          ],
        }),
      },
    };

    const audioTool = createSendAudioMessageTool(
      "access-token",
      "phone-number-id",
      "+51999999999",
      templates,
      genAI as any,
    );

    const result = await audioTool.invoke({ text: "Hola estudiante" } as any);

    expect(genAI.models.generateContent).toHaveBeenCalledWith(
      expect.objectContaining({
        model: "gemini-3.1-flash-tts-preview",
      }),
    );
    expect(pcmToWavMock).toHaveBeenCalledWith(expect.any(Buffer), 24000);
    expect(convertWavToMp3Mock).toHaveBeenCalledWith(Buffer.from("wav"));
    expect(uploadAudioMock).toHaveBeenCalledWith(
      expect.objectContaining({
        messaging_product: "whatsapp",
      }),
    );
    expect(sendAudioMessageByIdMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "audio",
        to: "+51999999999",
        audio: { id: "meta-audio-id" },
      }),
    );
    expect(templates).toEqual([
      expect.objectContaining({
        type: "audio",
        _sent: true,
      }),
    ]);
    expect(result).toContain("Audio de contenido");
  });

  it("devuelve un mensaje de error si Gemini no entrega audio válido", async () => {
    const templates: any[] = [];
    const genAI = {
      models: {
        generateContent: (jest.fn() as any).mockResolvedValue({ candidates: [] }),
      },
    };

    const audioTool = createSendAudioMessageTool(
      "access-token",
      "phone-number-id",
      "+51999999999",
      templates,
      genAI as any,
    );

    const result = await audioTool.invoke({ text: "Hola estudiante" } as any);

    expect(uploadAudioMock).not.toHaveBeenCalled();
    expect(sendAudioMessageByIdMock).not.toHaveBeenCalled();
    expect(templates).toEqual([]);
    expect(result).toBe("Hubo un error al intentar enviar el mensaje de audio.");
  });
});
