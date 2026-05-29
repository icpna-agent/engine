import { Module } from "@nestjs/common";
import { AgentController } from "./agent.controller";
import { AgentService } from "./agent.service";
import { BotRepository } from "@repositories/bot.repository";
import { InstanceRepository } from "@repositories/instance.repository";

@Module({
  controllers: [AgentController],
  providers: [AgentService, BotRepository, InstanceRepository],
  exports: [AgentService, BotRepository, InstanceRepository],
})
export class AgentModule {}
