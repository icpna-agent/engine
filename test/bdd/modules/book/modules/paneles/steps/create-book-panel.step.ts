import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given(
  "que el administrador está autenticado para gestionar paneles de libro",
  async function (this: ErixcelWorld) {
    const context = await createBookTestApp();
    this.app = context.app;
    this.token = await getAdminToken(context.app);
  },
);

When(
  "crea un panel con título {string}",
  async function (this: ErixcelWorld, title: string) {
    this.response = await request(this.app!.getHttpServer())
      .post("/admin/book/panel/create")
      .set("Authorization", `Bearer ${this.token}`)
      .send({
        title,
        theme: "Grammar",
        subTheme: "Large and small quantity",
        instruction: "Complete the grammar panel.",
        content: "Panel content for test.",
        bookPage: 5,
        bookId: 1,
      });
  },
);

Then(
  "el panel se crea con estado {int}",
  function (this: ErixcelWorld, status: number) {
    assert.equal(this.response?.status, status);
  },
);

Then(
  "el panel queda registrado con título {string}",
  function (this: ErixcelWorld, title: string) {
    assert.equal(this.response?.body.title, title);
  },
);
