import { After } from "@cucumber/cucumber";
import { closeApp } from "../../support/test-app";
import { ErixcelWorld } from "./world";

After(async function (this: ErixcelWorld) {
  await closeApp(this.app);
});
