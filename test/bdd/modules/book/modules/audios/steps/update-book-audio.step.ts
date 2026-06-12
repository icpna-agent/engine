import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../../../support/auth";
import { createBookTestApp } from "../../../../../../support/test-app";
import { ErixcelWorld } from "../../../../../support/world";

Given("que el administrador está autenticado para editar audios de libro", async function (this: ErixcelWorld) {
  const context = await createBookTestApp();
  this.app = context.app;
  this.token = await getAdminToken(context.app);
});

When("edita el audio de libro {int} con índice {string}", async function (this: ErixcelWorld, id: number, audioIndex: string) {
  this.response = await request(this.app!.getHttpServer()).patch(`/admin/book/audio/update/${id}`).set("Authorization", `Bearer ${this.token}`).send({ url: "https://example.com/audio/7-2.mp3", audioIndex, transcription: "Transcripción editada", bookPage: 3, bookId: 1 });
});

Then("el audio de libro editado responde con estado {int}", function (this: ErixcelWorld, status: number) {
  assert.equal(this.response?.status, status);
});

Then("el audio de libro queda actualizado con índice {string}", function (this: ErixcelWorld, audioIndex: string) {
  assert.equal(this.response?.body.audioIndex, audioIndex);
});
