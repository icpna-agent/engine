import { Injectable } from "@nestjs/common";
import { Context } from "@models/agent.model";
import { extractDisplayPhoneNumber } from "@functions/meta.function";
import { BotRepository } from "@repositories/bot.repository";

@Injectable()
export class ProcessBotService {
  constructor(private readonly botRepository: BotRepository) { }

  async process(context: Context): Promise<Context> {
    const phone = extractDisplayPhoneNumber(context.payload.entry);
    const bot = await this.botRepository.findByPhone(phone);

    return {
      payload: { ...context.payload, bot: bot },
      result: { ...context.result },
    };
  }
}
