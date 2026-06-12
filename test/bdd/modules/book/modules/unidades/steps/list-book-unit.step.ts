import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given("que el administrador está autenticado para listar unidades de libro", async function (this: ErixcelWorld) {
  const context = await createBookTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("lista las unidades de libro registradas", async function (this: ErixcelWorld) {
  this.response = await request(this.app!.getHttpServer()).get("/admin/book/unit/find-all").set("Authorization", `Bearer ${this.token}`);
});

Then("la lista de unidades de libro responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("la lista de unidades de libro contiene resultados", function (this: ErixcelWorld) {
  assert.ok(Array.isArray(this.response?.body.data));
  assert.ok(this.response!.body.data.length > 0);
});
