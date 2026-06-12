import request from "supertest";
import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import { closeApp, createBookTestApp } from "../support/test-app";
import { getAdminToken } from "../support/auth";

describe("Book API (e2e)", () => {
  let context: Awaited<ReturnType<typeof createBookTestApp>>;
  let token: string;

  beforeEach(async () => {
    context = await createBookTestApp();
    token = await getAdminToken(context.app);
  });

  afterEach(async () => {
    await closeApp(context?.app);
  });

  it("creates a book for an authenticated admin", async () => {
    const payload = {
      title: "American Big Picture",
      author: "Ben Goldstein",
      publisher: "Richmond",
      institution: "ICPNA",
      edition: "Intermediate 7",
      level: "intermediate",
      subLevel: 7,
      language: "english",
      targetProgram: "adults",
      cefrEquivalent: "b1",
      active: true,
    };

    await request(context.app.getHttpServer())
      .post("/admin/book/create")
      .set("Authorization", `Bearer ${token}`)
      .send(payload)
      .expect(201)
      .expect(({ body }) => {
        expect(body.id).toBe(1);
        expect(body.title).toBe(payload.title);
      });

    expect(context.bookService.createBook).toHaveBeenCalledWith(payload);
  });
});
