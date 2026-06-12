import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../support/auth";
import { createAgentTestApp } from "../../../../support/test-app";
import { ErixcelWorld } from "../../../support/world";

Given("que el administrador está autenticado para eliminar agentes", async function (this: ErixcelWorld) {
  const context = await createAgentTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("elimina el agente {int}", async function (this: ErixcelWorld, id: number) {
  this.response = await request(this.app!.getHttpServer())
    .delete(`/admin/agent/delete/${id}`)
    .set("Authorization", `Bearer ${this.token}`);
});

Then("la eliminación del agente responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("la eliminación del agente queda confirmada", function (this: ErixcelWorld) {
  assert.equal(this.response?.body.success, true);
});
