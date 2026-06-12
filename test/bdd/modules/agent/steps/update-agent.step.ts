import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../support/auth";
import { createAgentTestApp } from "../../../../support/test-app";
import { ErixcelWorld } from "../../../support/world";

Given("que el administrador está autenticado para editar agentes", async function (this: ErixcelWorld) {
  const context = await createAgentTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("edita el agente {int} con nombre {string}", async function (this: ErixcelWorld, id: number, name: string) {
  this.response = await request(this.app!.getHttpServer())
    .patch(`/admin/agent/update/${id}`)
    .set("Authorization", `Bearer ${this.token}`)
    .send({ name, phone: "+51999999999", prompt: "Prompt editado", model: "gemini" });
});

Then("el agente editado responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("el agente queda actualizado con nombre {string}", function (this: ErixcelWorld, name: string) {
  assert.equal(this.response?.body.name, name);
});
