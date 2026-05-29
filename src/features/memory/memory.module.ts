import { Module } from "@nestjs/common";
import { MemoryService } from "./memory.service";
import { ClientModule, } from "../client/client.module";

@Module({
  imports: [ClientModule],
  providers: [MemoryService],
  exports: [MemoryService],
})
export class MemoryModule {
  
}
