import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SchemaModule } from "./features/schema/schema.module";
import { AgentEngineModule } from "./modules/admin/engine/agent-engine.module";
import { MemoryModule } from "./features/memory/memory.module";
import { BookModule } from "./modules/admin/book/book.module";
import { BookAutoModule } from "./modules/admin/book-auto/book-auto.module";
import { BookAiModule } from "./modules/admin/book-ai/book-ai.module";
import { AuthModule } from "./modules/auth/auth.module";
import { AgentModule } from "./modules/admin/agent/agent.module";
import { UserModule } from "./modules/admin/user/user.module";
import { StorageModule } from "./modules/admin/storage/storage.module";

@Module({
  imports: [
    MemoryModule,
    // EmbeddingModule,
    SchemaModule,
    AgentEngineModule,
    AuthModule,
    BookModule,
    BookAutoModule,
    BookAiModule,
    AgentModule,
    UserModule,
    StorageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
