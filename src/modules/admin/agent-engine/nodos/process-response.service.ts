import { Injectable } from "@nestjs/common";
import { createAgent } from "langchain";
import { HumanMessage, AIMessage, BaseMessage } from "@langchain/core/messages";
import { MessagesAnnotation } from "@langchain/langgraph";
import { Context } from "@models/agent.model";
import { MemoryService } from "src/features/memory/memory.service";
import { ClientService } from "src/features/client/client.service";
import { WhatsAppCloudMessage } from "src/wb/messages/whatsapp-cloud-api";
import { createSendTextMessageTool } from "../tools/send-text-message.tool";
import { createSendImageMessageTool } from "../tools/send-image-message.tool";
import { createSendAudioMessageTool } from "../tools/send-audio-message.tool";
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

    const tools = [
      createSendTextMessageTool(accessToken, phoneNumberId, phone, templates),
      createSendImageMessageTool(accessToken, phoneNumberId, phone, templates),
      createSendAudioMessageTool(
        this.clientService.getGenAI(),
        accessToken,
        phoneNumberId,
        phone,
        templates,
      ),
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
    const messages: BaseMessage[] = (context.payload.messages || []).map((m) =>
      m.role === "assistant" ? new AIMessage(m.text) : new HumanMessage(m.text),
    );

    // 2. Ejecutar el agente con el historial completo
    await agent.invoke({ messages }, config);

    return {
      payload: { ...context.payload },
      result: { ...context.result, templates: templates },
    };
  }
}
