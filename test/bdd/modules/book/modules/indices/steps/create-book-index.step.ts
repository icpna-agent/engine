import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given(
  "que el administrador está autenticado para gestionar índices de libro",
  async function (this: ErixcelWorld) {
    const context = await createBookTestApp();
    this.app = context.app;
    this.token = await getAdminToken(context.app);
  },
);

When(
  "crea un índice con título {string}",
  async function (this: ErixcelWorld, title: string) {
    this.response = await request(this.app!.getHttpServer())
      .post("/admin/book/index/create")
      .set("Authorization", `Bearer ${this.token}`)
      .send({
        title,
        page: "Pag. 1",
        skill: "speaking",
        bookPage: 10,
        bookId: 1,
      });
  },
);

Then(
  "el índice se crea con estado {int}",
  function (this: ErixcelWorld, status: number) {
    assert.equal(this.response?.status, status);
  },
);

Then(
  "el índice queda registrado con título {string}",
  function (this: ErixcelWorld, title: string) {
    assert.equal(this.response?.body.title, title);
  },
);
