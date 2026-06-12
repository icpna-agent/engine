import { INestApplication } from "@nestjs/common";
import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Response } from "supertest";

export class ErixcelWorld extends World {
  app?: INestApplication;
  response?: Response;
  token?: string;
  expectedChallenge = "challenge-bdd-123";
  metaEvent?: Record<string, unknown>;
}

setWorldConstructor(ErixcelWorld);
