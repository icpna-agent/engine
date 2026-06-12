import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../support/auth";
import { createAgentTestApp } from "../../../../support/test-app";
import { ErixcelWorld } from "../../../support/world";

Given("que el administrador está autenticado para editar instancias", async function (this: ErixcelWorld) {
  const context = await createAgentTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("edita la instancia {int} para el agente {int}", async function (this: ErixcelWorld, id: number, botId: number) {
  this.response = await request(this.app!.getHttpServer())
    .patch(`/admin/agent/instance/update/${id}`)
    .set("Authorization", `Bearer ${this.token}`)
    .send({ bot_id: botId, whatsapp_type: "business", provider_type: "meta", business_id: "123", phone_number_id: "456", display_phone_number: "+51999999999", waba_id: "789", token: "TOKEN_EDITADO" });
});

Then("la instancia editada responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("la instancia queda actualizada para el agente {int}", function (this: ErixcelWorld, botId: number) {
  assert.equal(this.response?.body.bot_id, botId);
});
