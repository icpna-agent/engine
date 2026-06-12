import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { createEngineTestApp } from "../../../../support/test-app";
import { ErixcelWorld } from "../../../support/world";

Given(
  "que el motor está listo para recibir eventos de Meta",
  async function (this: ErixcelWorld) {
    const context = await createEngineTestApp();
    this.app = context.app;
    this.metaEvent = {
      object: "whatsapp_business_account",
      entry: [
        {
          id: "waba-id",
          changes: [
            {
              field: "messages",
              value: {
                messages: [{ id: "wamid.engine", type: "text" }],
              },
            },
          ],
        },
      ],
    };
  },
);

When(
  "Meta envía un evento de mensaje al motor",
  async function (this: ErixcelWorld) {
    this.response = await request(this.app!.getHttpServer())
      .post("/engine/flow")
      .set("x-real-ip", "203.0.113.30")
      .send(this.metaEvent);
  },
);

Then(
  "el motor responde con estado {int}",
  function (this: ErixcelWorld, status: number) {
    assert.equal(this.response?.status, status);
  },
);

Then(
  "el motor confirma {string}",
  function (this: ErixcelWorld, message: string) {
    assert.equal(this.response?.text, message);
  },
);
