import { Given, Then, When } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import request from "supertest";
import { getAdminToken } from "../../../../support/auth";
import { createUserTestApp } from "../../../../support/test-app";
import { ErixcelWorld } from "../../../support/world";

Given(
  "que el administrador está autenticado para gestionar usuarios",
  async function (this: ErixcelWorld) {
    const context = await createUserTestApp();
    this.app = context.app;
    this.token = await getAdminToken(context.app);
  },
);

When(
  "crea un usuario con teléfono {string}",
  async function (this: ErixcelWorld, phone: string) {
    this.response = await request(this.app!.getHttpServer())
      .post("/admin/user/create")
      .set("Authorization", `Bearer ${this.token}`)
      .send({
        phone,
        enabled: true,
        currentBookId: 1,
      });
  },
);

Then(
  "el usuario se crea con estado {int}",
  function (this: ErixcelWorld, status: number) {
    assert.equal(this.response?.status, status);
  },
);

Then(
  "el usuario queda registrado con teléfono {string}",
  function (this: ErixcelWorld, phone: string) {
    assert.equal(this.response?.body.phone, phone);
  },
);
