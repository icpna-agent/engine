import { describe, expect, it, jest } from "@jest/globals";

jest.mock("../../../../../src/modules/admin/engine/flow/flow.service", () => ({
  FlowService: jest.fn(),
}));

const { AgentEngineService } = require("../../../../../src/modules/admin/engine/agent-engine.service");

describe("AgentEngineService", () => {
  it("devuelve el challenge cuando Meta verifica el webhook con token correcto", () => {
    const service = new AgentEngineService({ run: jest.fn() } as any);

    expect(
      service.verifyWebhook("subscribe", "erixcel", "challenge-123"),
    ).toBe("challenge-123");
  });

  it("devuelve Forbidden cuando el token de verificación es inválido", () => {
    const service = new AgentEngineService({ run: jest.fn() } as any);

    expect(
      service.verifyWebhook("subscribe", "wrong-token", "challenge-123"),
    ).toBe("Forbidden");
  });
});
