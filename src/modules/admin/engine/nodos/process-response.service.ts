import { Injectable } from "@nestjs/common";
import { createAgent } from "langchain";
import { HumanMessage, AIMessage, BaseMessage } from "@langchain/core/messages";
import { MessagesAnnotation } from "@langchain/langgraph";
import { Context } from "@models/agent.model";
import { MemoryService } from "src/features/memory/memory.service";
import { ClientService } from "src/features/client/client.service";
import { WhatsAppClient, WhatsAppCloudMessage } from "src/wb/messages/whatsapp-cloud-api";
import { createSendTextMessageTool } from "../tools/send-text-message.tool";
import { createSendImageMessageTool } from "../tools/send-image-message.tool";
import { createSendAudioMessageTool } from "../tools/send-audio-message.tool";
import { MessageMedia, Message } from "@db/tables/message.table";
@Injectable()
export class ProcessResponseService {
  constructor(
    private memoryService: MemoryService,
    private clientService: ClientService,
  ) {}

  async process(context: Context): Promise<Context> {
    const prompt = context.payload.bot?.prompt || "";
    const llm = this.clientService.getLlm(context.payload.bot?.model);
    const checkpoint = await this.memoryService.getCheckpointer();

    const templates: WhatsAppCloudMessage[] = [];

    const accessToken = context.payload.instance?.token || "";
    const phoneNumberId = context.payload.instance?.phone_number_id || "";
    const phone = context.payload.user?.phone || "";

    const whatsappClient = new WhatsAppClient({ accessToken, phoneNumberId });

    const tools = [
      createSendTextMessageTool(accessToken, phoneNumberId, phone, templates),
      createSendImageMessageTool(accessToken, phoneNumberId, phone, templates),
      createSendAudioMessageTool(accessToken, phoneNumberId, phone, templates, this.clientService.getGenAI()),
    ];

    const agent = createAgent({
      model: llm,
      systemPrompt: prompt,
      tools: tools,
      checkpointer: checkpoint,
      stateSchema: MessagesAnnotation,
    });

    const config = this.memoryService.buildRunConfig(
      context.payload.chat?.id + "",
      context.payload.user?.id + "",
    );

    // 1. Convertir el historial de la DB (que ya incluye el mensaje actual) a mensajes de LangChain
    const messages: BaseMessage[] = [];
    const rawMessages = context.payload.messages || [];

    for (let i = 0; i < rawMessages.length; i++) {
      const m = rawMessages[i];
      const isLastMessage = i === rawMessages.length - 1;
      const lcMessage = await this.mapDbMessageToLangChain(m, isLastMessage, whatsappClient);
      messages.push(lcMessage);
    }

    // 2. Ejecutar el agente con el historial completo
    await agent.invoke({ messages }, config);

    return {
      payload: { ...context.payload },
      result: { ...context.result, templates: templates },
    };
  }

  private async mapDbMessageToLangChain(
    m: Message,
    isLastMessage: boolean,
    whatsappClient: WhatsAppClient,
  ): Promise<BaseMessage> {

    if (m.role === "assistant") {
      return new AIMessage(m.text);
    }

    const media = m.media as MessageMedia;
    const isMultimodal = (m.type === "audio" || m.type === "image") && isLastMessage && media?.url;

    if (!isMultimodal || !media) {
      return new HumanMessage(m.text);
    }

    try {

      const buffer = await whatsappClient.downloadMediaByUrl(media.url);
      const base64Data = buffer.toString("base64");
      const cleanMimeType = media.mimeType.split(";")[0];

      const contentList: Array<{
        type: string;
        text?: string;
        image_url?: string;
        mimeType?: string;
        data?: string;
      }> = [];

      if (m.type === "audio") {
        contentList.push({
          type: "media",
          mimeType: cleanMimeType,
          data: base64Data
        });
      }
      
      if (m.type === "image") {
        contentList.push({
          type: "image_url",
          image_url: `data:${cleanMimeType};base64,${base64Data}`
        });
      }

      if (media.caption) {
        contentList.push({
          type: "text",
          text: media.caption
        });
      }

      return new HumanMessage({ content: contentList });
    } catch (error) {
      console.error(`❌ Error descargando multimedia de Meta:`, error);
      return new HumanMessage(m.text);
    }
  }
}
