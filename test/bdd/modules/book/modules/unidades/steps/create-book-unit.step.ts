import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given(
  "que el administrador está autenticado para gestionar unidades de libro",
  async function (this: ErixcelWorld) {
    const context = await createBookTestApp();
    this.app = context.app;
    this.token = await getAdminToken(context.app);
  },
);

When(
  "crea la unidad {int} con título {string}",
  async function (this: ErixcelWorld, number: number, title: string) {
    this.response = await request(this.app!.getHttpServer())
      .post("/admin/book/unit/create")
      .set("Authorization", `Bearer ${this.token}`)
      .send({
        number,
        title,
        grammar: ["Quantifiers", "Using one and ones"],
        vocabulary: ["Belongings", "Organization"],
        readingListening: ["Say Yes to Mess"],
        pronunciation: ["Intonation"],
        bookPage: 2,
        bookId: 1,
      });
  },
);

Then(
  "la unidad se crea con estado {int}",
  function (this: ErixcelWorld, status: number) {
    assert.equal(this.response?.status, status);
  },
);

Then(
  "la unidad queda registrada con número {int}",
  function (this: ErixcelWorld, number: number) {
    assert.equal(this.response?.body.number, number);
  },
);
