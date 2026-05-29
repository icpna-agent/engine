import { Module } from "@nestjs/common";
import { AgentEngineService } from "./agent-engine.service";
import { AgentEngineController } from "./agent-engine.controller";
import { ProcessBotService } from "./nodos/process-bot.service";
import { ProcessUserService } from "./nodos/process-user.service";
import { ProcessChatService } from "./nodos/process-chat.service";
import { ProcessMessagesService } from "./nodos/process-message.service";
import { ProcessResponseService } from "./nodos/process-response.service";
import { ProcessSendService } from "./nodos/process-send.service";
import { ProcessInstanceService } from "./nodos/process-instance.service";
import { FlowService } from "./flow/flow.service";
import { MemoryModule } from "src/features/memory/memory.module";
import { ClientModule } from "src/features/client/client.module";
import { UserRepository } from "@repositories/user.repository";
import { BotRepository } from "@repositories/bot.repository";
import { InstanceRepository } from "@repositories/instance.repository";
import { ChatRepository } from "@repositories/chat.repository";
import { MessageRepository } from "@repositories/message.repository";

@Module({
  controllers: [AgentEngineController],
  providers: [
    AgentEngineService,
    ProcessBotService,
    ProcessInstanceService,
    ProcessUserService,
    ProcessChatService,
    ProcessMessagesService,
    ProcessResponseService,
    ProcessSendService,
    FlowService,

    UserRepository,
    BotRepository,
    InstanceRepository,
    ChatRepository,
    MessageRepository,
  ],
  imports: [MemoryModule, ClientModule],
  exports: [AgentEngineService],
})
export class AgentEngineModule {}
