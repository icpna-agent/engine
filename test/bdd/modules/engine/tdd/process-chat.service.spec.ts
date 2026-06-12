import { describe, expect, it, jest } from "@jest/globals";
import { ProcessChatService } from "../../../../../src/modules/admin/engine/nodos/process-chat.service";
import { Context } from "../../../../../src/models/agent.model";

describe("ProcessChatService", () => {
  it("adjunta al contexto el chat encontrado o creado para bot y usuario", async () => {
    const chat = { id: 99, enabled: true, bot_id: 1, user_id: 2 };
    const chatRepository = {
      findOrCreate: (jest.fn() as any).mockResolvedValue(chat),
    };
    const service = new ProcessChatService(chatRepository as any);
    const context = {
      payload: {
        bot: { id: 1 },
        user: { id: 2 },
      },
      result: {},
    } as Context;

    const result = await service.process(context);

    expect(chatRepository.findOrCreate).toHaveBeenCalledWith(1, 2, "inbox");
    expect(result.payload.chat).toBe(chat);
  });
});
