import { Injectable } from "@nestjs/common";
import { FlowService } from "./flow/flow.service";
import { NodePayload } from "@models/agent.model";
import { Meta } from "@models/meta.model";

@Injectable()
export class AgentEngineService {
  constructor(private flowService: FlowService) {}

  verifyWebhook(mode: string, token: string, challenge: string): string {
    const verifyToken = "erixcel";

    if (mode === "subscribe" && token === verifyToken) {
      console.log("WEBHOOK_VERIFIED ✅");
      return challenge;
    }

    console.log("VERIFICATION_FAILED ❌");
    return "Forbidden";
  }

  runFlowProduction(meta: Meta) {
    const nodePayload: NodePayload = { entry: meta };
    return this.flowService.run(nodePayload);
  }
}
