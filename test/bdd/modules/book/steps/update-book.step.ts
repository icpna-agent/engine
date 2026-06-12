import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../support/auth";
import { createBookTestApp } from "../../../../support/test-app";
import { ErixcelWorld } from "../../../support/world";

Given("que el administrador está autenticado para editar libros", async function (this: ErixcelWorld) {
  const context = await createBookTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("edita el libro {int} con título {string}", async function (this: ErixcelWorld, id: number, title: string) {
  this.response = await request(this.app!.getHttpServer())
    .patch(`/admin/book/update/${id}`)
    .set("Authorization", `Bearer ${this.token}`)
    .send({ title, institution: "ICPNA", level: "intermediate", language: "english", targetProgram: "adults", active: true });
});

Then("el libro editado responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("el libro queda actualizado con título {string}", function (this: ErixcelWorld, title: string) {
  assert.equal(this.response?.body.title, title);
});
