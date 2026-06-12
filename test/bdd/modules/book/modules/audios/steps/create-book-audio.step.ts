import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given(
  "que el administrador está autenticado para gestionar audios de libro",
  async function (this: ErixcelWorld) {
    const context = await createBookTestApp();
    this.app = context.app;
    this.token = await getAdminToken(context.app);
  },
);

When(
  "crea un audio con índice {string}",
  async function (this: ErixcelWorld, audioIndex: string) {
    this.response = await request(this.app!.getHttpServer())
      .post("/admin/book/audio/create")
      .set("Authorization", `Bearer ${this.token}`)
      .send({
        url: "https://example.com/audio/7-1.mp3",
        audioIndex,
        transcription: "Audio transcription for test.",
        bookPage: 2,
        metaMediaId: 123,
        bookId: 1,
      });
  },
);

Then(
  "el audio se crea con estado {int}",
  function (this: ErixcelWorld, status: number) {
    assert.equal(this.response?.status, status);
  },
);

Then(
  "el audio queda registrado con índice {string}",
  function (this: ErixcelWorld, audioIndex: string) {
    assert.equal(this.response?.body.audioIndex, audioIndex);
  },
);
