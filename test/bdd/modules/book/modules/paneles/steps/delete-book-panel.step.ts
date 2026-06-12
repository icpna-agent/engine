import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given("que el administrador está autenticado para eliminar paneles de libro", async function (this: ErixcelWorld) {
  const context = await createBookTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("elimina el panel de libro {int}", async function (this: ErixcelWorld, id: number) {
  this.response = await request(this.app!.getHttpServer()).delete(`/admin/book/panel/delete/${id}`).set("Authorization", `Bearer ${this.token}`);
});

Then("la eliminación del panel de libro responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("la eliminación del panel de libro queda confirmada", function (this: ErixcelWorld) {
  assert.equal(this.response?.body.deleted, true);
});
