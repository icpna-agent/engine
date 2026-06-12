import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given("que el administrador está autenticado para editar lecciones de libro", async function (this: ErixcelWorld) {
  const context = await createBookTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("edita la lección de libro {int} con título {string}", async function (this: ErixcelWorld, id: number, title: string) {
  this.response = await request(this.app!.getHttpServer()).patch(`/admin/book/lesson/update/${id}`).set("Authorization", `Bearer ${this.token}`).send({ unitNumber: 7.1, title, skill: "reading", bookPage: 4, bookId: 1 });
});

Then("la lección de libro editada responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("la lección de libro queda actualizada con título {string}", function (this: ErixcelWorld, title: string) {
  assert.equal(this.response?.body.title, title);
});
