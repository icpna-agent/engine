import { Bot } from "@db/tables/bot.table";
import { Chat } from "@db/tables/chat.table";
import { Instance } from "@db/tables/instance.table";
import { Message } from "@db/tables/message.table";
import { User } from "@db/tables/user.table";
import { Annotation } from "@langchain/langgraph";
import { Meta } from "./meta.model";
import { WhatsAppCloudMessage } from "src/wb/messages/whatsapp-cloud-api";

export const context_definition = Annotation.Root({
  payload: Annotation<NodePayload>({
    reducer: (_prev, next) => next,
    default: () => ({
      entry:        undefined as unknown as Meta,
      bot:          undefined as unknown as Bot,
      user:         undefined as unknown as User,
      instance:     undefined as unknown as Instance,
      chat:         undefined as unknown as Chat,
      messages:     undefined as unknown as Message[],
    }),
  }),
  result: Annotation<NodeResponse>({
    reducer: (_prev, next) => next,
    default: () => ({ 
      status: undefined as unknown as boolean, 
      templates: undefined as unknown as WhatsAppCloudMessage[],
    }),
  }),
});

export type Context = typeof context_definition.State;

export class NodeResponse {
  status: boolean = true;
  templates: WhatsAppCloudMessage[] = [];
}

export class NodePayload {
  entry?: Meta;
  bot?: Bot;
  user?: User;
  instance?: Instance;
  chat?: Chat;
  messages?: Message[];
}