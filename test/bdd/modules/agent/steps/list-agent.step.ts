import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../support/auth";
import { createAgentTestApp } from "../../../../support/test-app";
import { ErixcelWorld } from "../../../support/world";

Given("que el administrador está autenticado para listar agentes", async function (this: ErixcelWorld) {
  const context = await createAgentTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("lista los agentes registrados", async function (this: ErixcelWorld) {
  this.response = await request(this.app!.getHttpServer())
    .get("/admin/agent/find-all")
    .set("Authorization", `Bearer ${this.token}`);
});

Then("la lista de agentes responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("la lista de agentes contiene resultados", function (this: ErixcelWorld) {
  assert.ok(Array.isArray(this.response?.body.data));
  assert.ok(this.response!.body.data.length > 0);
});
