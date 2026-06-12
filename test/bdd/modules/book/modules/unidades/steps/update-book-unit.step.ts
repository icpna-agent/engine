import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given("que el administrador está autenticado para editar unidades de libro", async function (this: ErixcelWorld) {
  const context = await createBookTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("edita la unidad de libro {int} con número {int}", async function (this: ErixcelWorld, id: number, number: number) {
  this.response = await request(this.app!.getHttpServer()).patch(`/admin/book/unit/update/${id}`).set("Authorization", `Bearer ${this.token}`).send({ number, title: "Unit editada", bookPage: 3, bookId: 1 });
});

Then("la unidad de libro editada responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("la unidad de libro queda actualizada con número {int}", function (this: ErixcelWorld, number: number) {
  assert.equal(this.response?.body.number, number);
});
