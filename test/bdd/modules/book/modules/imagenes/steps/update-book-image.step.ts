import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given("que el administrador está autenticado para editar imágenes de libro", async function (this: ErixcelWorld) {
  const context = await createBookTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("edita la imagen de libro {int} para la página {int}", async function (this: ErixcelWorld, id: number, bookPage: number) {
  this.response = await request(this.app!.getHttpServer()).patch(`/admin/book/image/update/${id}`).set("Authorization", `Bearer ${this.token}`).send({ url: "https://example.com/images/book-page-3.png", bookPage, bookId: 1 });
});

Then("la imagen de libro editada responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("la imagen de libro queda actualizada para la página {int}", function (this: ErixcelWorld, bookPage: number) {
  assert.equal(this.response?.body.bookPage, bookPage);
});
