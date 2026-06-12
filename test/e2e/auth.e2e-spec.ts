import request from "supertest";
import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import { closeApp, createBookTestApp } from "../support/test-app";
import { getAdminToken } from "../support/auth";

describe("Auth and admin security (e2e)", () => {
  let context: Awaited<ReturnType<typeof createBookTestApp>>;

  beforeEach(async () => {
    context = await createBookTestApp();
  });

  afterEach(async () => {
    await closeApp(context?.app);
  });

  it("blocks admin book routes when the JWT is missing", async () => {
    await request(context.app.getHttpServer())
      .get("/admin/book/find-all")
      .expect(401);
  });

  it("allows admin book routes when the JWT is valid", async () => {
    const token = await getAdminToken(context.app);

    await request(context.app.getHttpServer())
      .get("/admin/book/find-all")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .expect(({ body }) => {
        expect(Array.isArray(body.data)).toBe(true);
      });
  });
});
