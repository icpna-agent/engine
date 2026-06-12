import { INestApplication } from "@nestjs/common";
import request from "supertest";

export async function getAdminToken(app: INestApplication): Promise<string> {
  const response = await request(app.getHttpServer())
    .post("/auth/login")
    .send({
      email: "admin@icpna.studio",
      password: "123456",
    })
    .expect(200);

  return response.body.accessToken;
}
