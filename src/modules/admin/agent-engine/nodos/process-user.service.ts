import { Injectable } from "@nestjs/common";
import { Context } from "@models/agent.model";
import { extractSenderPhone } from "@functions/meta.function";
import { UserRepository } from "@repositories/user.repository";

@Injectable()
export class ProcessUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async process(context: Context): Promise<Context> {
    const phone = extractSenderPhone(context.payload.entry);
    const user = await this.userRepository.findByPhone(phone);

    return {
      payload: { ...context.payload, user: user },
      result: { ...context.result },
    };
  }
}
