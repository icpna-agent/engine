import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given(
  "que el administrador está autenticado para gestionar imágenes de libro",
  async function (this: ErixcelWorld) {
    const context = await createBookTestApp();
    this.app = context.app;
    this.token = await getAdminToken(context.app);
  },
);

When(
  "crea una imagen para la página {int}",
  async function (this: ErixcelWorld, bookPage: number) {
    this.response = await request(this.app!.getHttpServer())
      .post("/admin/book/image/create")
      .set("Authorization", `Bearer ${this.token}`)
      .send({
        url: "https://example.com/images/book-page-2.png",
        bookPage,
        metaMediaId: 321,
        bookId: 1,
      });
  },
);

Then(
  "la imagen se crea con estado {int}",
  function (this: ErixcelWorld, status: number) {
    assert.equal(this.response?.status, status);
  },
);

Then(
  "la imagen queda registrada para la página {int}",
  function (this: ErixcelWorld, bookPage: number) {
    assert.equal(this.response?.body.bookPage, bookPage);
  },
);
