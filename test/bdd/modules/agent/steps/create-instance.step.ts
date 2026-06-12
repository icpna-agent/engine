import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../support/auth";
import { createAgentTestApp } from "../../../../support/test-app";
import { ErixcelWorld } from "../../../support/world";

Given(
  "que el administrador está autenticado para gestionar instancias",
  async function (this: ErixcelWorld) {
    const context = await createAgentTestApp();
    this.app = context.app;
    this.token = await getAdminToken(context.app);
  },
);

When(
  "crea una instancia de WhatsApp para el agente {int}",
  async function (this: ErixcelWorld, botId: number) {
    this.response = await request(this.app!.getHttpServer())
      .post("/admin/agent/instance/create")
      .set("Authorization", `Bearer ${this.token}`)
      .send({
        bot_id: botId,
        whatsapp_type: "business",
        provider_type: "meta",
        business_id: "123456789012345",
        phone_number_id: "987654321098765",
        display_phone_number: "+51999999999",
        waba_id: "234567890123456",
        token: "EAAG_TEST_TOKEN",
      });
  },
);

Then(
  "la instancia se crea con estado {int}",
  function (this: ErixcelWorld, status: number) {
    assert.equal(this.response?.status, status);
  },
);

Then(
  "la instancia queda asociada al agente {int}",
  function (this: ErixcelWorld, botId: number) {
    assert.equal(this.response?.body.bot_id, botId);
  },
);
