import { describe, expect, it, jest } from "@jest/globals";
import { ChatRepository } from "../../../../../src/repositories/chat.repository";

describe("ChatRepository.findOrCreate", () => {
  it("crea un nuevo chat cuando el último chat está deshabilitado", async () => {
    const repository = new ChatRepository();
    const disabledChat = { id: 10, enabled: false };
    const newChat = { id: 11, enabled: true, bot_id: 1, user_id: 2 };

    jest
      .spyOn(repository, "findLastByBotAndUser")
      .mockResolvedValue(disabledChat as any);
    jest.spyOn(repository, "create").mockResolvedValue(newChat as any);

    const result = await repository.findOrCreate(1, 2, "inbox");

    expect(repository.create).toHaveBeenCalledWith({
      bot_id: 1,
      user_id: 2,
      remote: "inbox",
      enabled: true,
    });
    expect(result).toBe(newChat);
  });

  it("reutiliza el chat activo más reciente", async () => {
    const repository = new ChatRepository();
    const activeChat = { id: 20, enabled: true, bot_id: 1, user_id: 2 };

    jest
      .spyOn(repository, "findLastByBotAndUser")
      .mockResolvedValue(activeChat as any);
    const createSpy = jest.spyOn(repository, "create");

    const result = await repository.findOrCreate(1, 2, "inbox");

    expect(createSpy).not.toHaveBeenCalled();
    expect(result).toBe(activeChat);
  });
});
