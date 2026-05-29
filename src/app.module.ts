import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SchemaModule } from "./features/schema/schema.module";
import { AgentEngineModule } from "./modules/admin/agent-engine/agent-engine.module";
import { MemoryModule } from "./features/memory/memory.module";
import { BookModule } from "./modules/admin/book/book.module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [
    MemoryModule,
    // EmbeddingModule,
    SchemaModule,
    AgentEngineModule,
    AuthModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
