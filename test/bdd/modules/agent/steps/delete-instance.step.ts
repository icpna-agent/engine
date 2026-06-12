import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../support/auth";
import { createAgentTestApp } from "../../../../support/test-app";
import { ErixcelWorld } from "../../../support/world";

Given("que el administrador está autenticado para eliminar instancias", async function (this: ErixcelWorld) {
  const context = await createAgentTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("elimina la instancia {int}", async function (this: ErixcelWorld, id: number) {
  this.response = await request(this.app!.getHttpServer())
    .delete(`/admin/agent/instance/delete/${id}`)
    .set("Authorization", `Bearer ${this.token}`);
});

Then("la eliminación de la instancia responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("la eliminación de la instancia queda confirmada", function (this: ErixcelWorld) {
  assert.equal(this.response?.body.success, true);
});
