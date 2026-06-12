import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../support/auth";
import { createAgentTestApp } from "../../../../support/test-app";
import { ErixcelWorld } from "../../../support/world";

Given(
  "que el administrador está autenticado para gestionar agentes",
  async function (this: ErixcelWorld) {
    const context = await createAgentTestApp();
    this.app = context.app;
    this.token = await getAdminToken(context.app);
  },
);

When(
  "crea un agente llamado {string}",
  async function (this: ErixcelWorld, name: string) {
    this.response = await request(this.app!.getHttpServer())
      .post("/admin/agent/create")
      .set("Authorization", `Bearer ${this.token}`)
      .send({
        phone: "+51999999999",
        name,
        prompt: "Eres un asistente academico para estudiantes ICPNA.",
        model: "gpt",
      });
  },
);

Then(
  "el agente se crea con estado {int}",
  function (this: ErixcelWorld, status: number) {
    assert.equal(this.response?.status, status);
  },
);

Then(
  "el agente queda registrado con nombre {string}",
  function (this: ErixcelWorld, name: string) {
    assert.equal(this.response?.body.name, name);
  },
);
