import request from "supertest";
import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import { closeApp, createAgentTestApp } from "../support/test-app";
import { getAdminToken } from "../support/auth";

describe("Agent API (e2e)", () => {
  let context: Awaited<ReturnType<typeof createAgentTestApp>>;
  let token: string;

  beforeEach(async () => {
    context = await createAgentTestApp();
    token = await getAdminToken(context.app);
  });

  afterEach(async () => {
    await closeApp(context?.app);
  });

  it("creates a bot for an authenticated admin", async () => {
    const payload = {
      phone: "+51999999999",
      name: "ICPNA Agent",
      prompt: "Eres un asistente de conversacion para estudiantes.",
      model: "gpt",
    };

    await request(context.app.getHttpServer())
      .post("/admin/agent/create")
      .set("Authorization", `Bearer ${token}`)
      .send(payload)
      .expect(201)
      .expect(({ body }) => {
        expect(body.id).toBe(1);
        expect(body.name).toBe(payload.name);
      });

    expect(context.agentService.createBot).toHaveBeenCalledWith(payload);
  });
});
