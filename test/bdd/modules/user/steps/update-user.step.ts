import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../support/auth";
import { createUserTestApp } from "../../../../support/test-app";
import { ErixcelWorld } from "../../../support/world";

Given("que el administrador está autenticado para editar usuarios", async function (this: ErixcelWorld) {
  const context = await createUserTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("edita el usuario {int} con teléfono {string}", async function (this: ErixcelWorld, id: number, phone: string) {
  this.response = await request(this.app!.getHttpServer())
    .patch(`/admin/user/update/${id}`)
    .set("Authorization", `Bearer ${this.token}`)
    .send({ phone, enabled: true, currentBookId: 1 });
});

Then("el usuario editado responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("el usuario queda actualizado con teléfono {string}", function (this: ErixcelWorld, phone: string) {
  assert.equal(this.response?.body.phone, phone);
});
