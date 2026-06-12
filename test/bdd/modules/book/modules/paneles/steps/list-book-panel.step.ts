import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given("que el administrador está autenticado para listar paneles de libro", async function (this: ErixcelWorld) {
  const context = await createBookTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("lista los paneles de libro registrados", async function (this: ErixcelWorld) {
  this.response = await request(this.app!.getHttpServer()).get("/admin/book/panel/find-all").set("Authorization", `Bearer ${this.token}`);
});

Then("la lista de paneles de libro responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("la lista de paneles de libro contiene resultados", function (this: ErixcelWorld) {
  assert.ok(Array.isArray(this.response?.body.data));
  assert.ok(this.response!.body.data.length > 0);
});
