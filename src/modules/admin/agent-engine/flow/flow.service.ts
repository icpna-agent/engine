import { Injectable } from "@nestjs/common";
import { StateGraph, START, END } from "@langchain/langgraph";
import {
  NodeResponse,
  context_definition,
  Context,
  NodePayload,
} from "@models/agent.model";
import { ProcessUserService } from "../nodos/process-user.service";
import { ProcessBotService } from "../nodos/process-bot.service";
import { ProcessChatService } from "../nodos/process-chat.service";
import { ProcessMessagesService } from "../nodos/process-message.service";
import { ProcessResponseService } from "./../nodos/process-response.service";
import { ProcessSendService } from "../nodos/process-send.service";
import { ProcessInstanceService } from "../nodos/process-instance.service";
import { CallbackHandler } from "@langfuse/langchain";
import { ClientService } from "src/features/client/client.service";

@Injectable()
export class FlowService {
  constructor(
    private processUserService: ProcessUserService,
    private processBotService: ProcessBotService,
    private processInstanceService: ProcessInstanceService,
    private processChatService: ProcessChatService,
    private processMessagesService: ProcessMessagesService,
    private processResponseService: ProcessResponseService,
    private processSendService: ProcessSendService,
    private clientService: ClientService,
  ) {}

  private async processBot(context: Context) {
    const response = await this.processBotService.process(context);
    return response;
  }

  private async processUser(context: Context) {
    const response = await this.processUserService.process(context);
    return response;
  }

  private async processChat(context: Context) {
    const response = await this.processChatService.process(context);
    return response;
  }

  private async processMessages(context: Context) {
    const response = await this.processMessagesService.process(context);
    return response;
  }

  private async processResponse(context: Context) {
    const response = await this.processResponseService.process(context);
    return response;
  }

  private async processInstance(context: Context) {
    const response = await this.processInstanceService.process(context);
    return response;
  }

  private async processSend(context: Context) {
    const response = await this.processSendService.process(context);
    return response;
  }

  async run(nodePayload: NodePayload): Promise<NodeResponse> {
    const workflow = new StateGraph(context_definition)
      .addNode("processBot", this.processBot.bind(this))
      .addNode("processInstance", this.processInstance.bind(this))
      .addNode("processUser", this.processUser.bind(this))
      .addNode("processChat", this.processChat.bind(this))
      .addNode("processMessages", this.processMessages.bind(this))
      .addNode("processResponse", this.processResponse.bind(this))
      .addNode("processSend", this.processSend.bind(this));

    type Node = keyof (typeof workflow)["nodes"];
    type State = Context;

    const conditionalEdge = (successNode: Node, failureNode: Node) => {
      const conditionalFunc = (state: State) =>
        state.result?.status === false ? "failure" : "success";
      const mapping: Record<ReturnType<typeof conditionalFunc>, Node> = {
        success: successNode,
        failure: failureNode,
      };

      return [conditionalFunc, mapping] as const;
    };

    workflow
      .addEdge(START, "processBot")
      .addConditionalEdges(
        "processBot",
        ...conditionalEdge("processInstance", "processResponse"),
      )
      .addConditionalEdges(
        "processInstance",
        ...conditionalEdge("processUser", "processResponse"),
      )
      .addConditionalEdges(
        "processUser",
        ...conditionalEdge("processChat", "processResponse"),
      )
      .addConditionalEdges(
        "processChat",
        ...conditionalEdge("processMessages", "processResponse"),
      )
      .addEdge("processMessages", "processResponse")
      .addEdge("processResponse", "processSend")
      .addEdge("processSend", END);

    const app = workflow.compile();

    // const graph = await app.getGraphAsync();
    // await generateMermaid('src/modules/admin/agent-engine/flow/flow-diagram', graph.drawMermaid());

    const langfuse = this.clientService.getLangfuse();

    const langfuseHandler = new CallbackHandler({
      sessionId: nodePayload?.chat?.id + "",
      userId: nodePayload?.user?.id + "",
      traceMetadata: {
        entryId: nodePayload.entry?.entry?.[0]?.id,
      },
    });

    try {
      const result = await app.invoke(
        { payload: nodePayload, result: new NodeResponse() },
        { callbacks: [langfuseHandler] },
      );

      await langfuse.flushAsync();

      return result.result;
    } finally {
      await langfuse.flushAsync();
    }
  }
}
