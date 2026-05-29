import { Injectable } from "@nestjs/common";
import { Context } from "@models/agent.model";
import { InstanceRepository } from "@repositories/instance.repository";

@Injectable()
export class ProcessInstanceService {
  constructor(private readonly instanceRepository: InstanceRepository) {}

  async process(context: Context): Promise<Context> {
    const botId = context.payload.bot?.id;
    const instance = await this.instanceRepository.findByBotId(botId);

    return {
      payload: { ...context.payload, instance: instance },
      result: { ...context.result },
    };
  }
}
