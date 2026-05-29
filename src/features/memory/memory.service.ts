import { Injectable } from "@nestjs/common";
import { InMemoryStore, MemorySaver } from "@langchain/langgraph";

export type AgentRunConfig = {
  configurable: {
    thread_id: string;
    userId?: string;
    [k: string]: unknown;
  };
};

@Injectable()
export class MemoryService {

  private _checkpointer: MemorySaver | null = null;
  private _store: InMemoryStore | null = null;

  async initLangGraphMemory(): Promise<void> {
    if (this._checkpointer && this._store) return;
    this._checkpointer = new MemorySaver();
    this._store = new InMemoryStore();
  }

  async getCheckpointer(): Promise<MemorySaver> {
    await this.initLangGraphMemory();
    return this._checkpointer;
  }

  async getStore(): Promise<InMemoryStore> {
    await this.initLangGraphMemory();
    return this._store;
  }

  buildRunConfig(threadId: string, userId?: string, extra?: Record<string, unknown>): AgentRunConfig {
    return {
      configurable: {
        thread_id: threadId,
        ...(userId ? { userId } : {}),
        ...(extra ?? {}),
      },
    };
  }
}
