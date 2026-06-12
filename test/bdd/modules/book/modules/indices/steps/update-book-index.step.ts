import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given("que el administrador está autenticado para editar índices de libro", async function (this: ErixcelWorld) {
  const context = await createBookTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("edita el índice de libro {int} con título {string}", async function (this: ErixcelWorld, id: number, title: string) {
  this.response = await request(this.app!.getHttpServer()).patch(`/admin/book/index/update/${id}`).set("Authorization", `Bearer ${this.token}`).send({ title, page: "Pag. 2", skill: "grammar", bookPage: 11, bookId: 1 });
});

Then("el índice de libro editado responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("el índice de libro queda actualizado con título {string}", function (this: ErixcelWorld, title: string) {
  assert.equal(this.response?.body.title, title);
});
