import request from "supertest";
import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import { closeApp, createEngineTestApp } from "../support/test-app";

describe("Engine flow API (e2e)", () => {
  let context: Awaited<ReturnType<typeof createEngineTestApp>>;

  beforeEach(async () => {
    context = await createEngineTestApp();
  });

  afterEach(async () => {
    await closeApp(context?.app);
  });

  it("returns Meta challenge when the webhook token is valid", async () => {
    await request(context.app.getHttpServer())
      .get("/engine/flow")
      .query({
        "hub.mode": "subscribe",
        "hub.verify_token": "erixcel",
        "hub.challenge": "challenge-123",
      })
      .expect(200)
      .expect("challenge-123");
  });

  it("acknowledges incoming Meta events", async () => {
    const metaEvent = {
      object: "whatsapp_business_account",
      entry: [
        {
          id: "waba-id",
          changes: [
            {
              field: "messages",
              value: {
                messages: [{ id: "wamid.test", type: "text" }],
              },
            },
          ],
        },
      ],
    };

    await request(context.app.getHttpServer())
      .post("/engine/flow")
      .set("x-real-ip", "203.0.113.10")
      .send(metaEvent)
      .expect(200)
      .expect("EVENT_RECEIVED");

    expect(context.agentEngineService.runFlowProduction).toHaveBeenCalledWith(
      metaEvent,
    );
  });
});
