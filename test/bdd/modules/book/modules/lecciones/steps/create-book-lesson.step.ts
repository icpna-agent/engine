import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given(
  "que el administrador está autenticado para gestionar lecciones de libro",
  async function (this: ErixcelWorld) {
    const context = await createBookTestApp();
    this.app = context.app;
    this.token = await getAdminToken(context.app);
  },
);

When(
  "crea una lección con título {string}",
  async function (this: ErixcelWorld, title: string) {
    this.response = await request(this.app!.getHttpServer())
      .post("/admin/book/lesson/create")
      .set("Authorization", `Bearer ${this.token}`)
      .send({
        unitNumber: 7.1,
        title,
        skill: "reading",
        topic: "Organization",
        activityNumber: 1,
        letterNumber: "a",
        instruction: "Read the article and answer the questions.",
        content: "Lesson content for test.",
        bookPage: 4,
        bookId: 1,
      });
  },
);

Then(
  "la lección se crea con estado {int}",
  function (this: ErixcelWorld, status: number) {
    assert.equal(this.response?.status, status);
  },
);

Then(
  "la lección queda registrada con título {string}",
  function (this: ErixcelWorld, title: string) {
    assert.equal(this.response?.body.title, title);
  },
);
