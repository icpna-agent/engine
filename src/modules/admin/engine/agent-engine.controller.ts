import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
  UseGuards,
} from "@nestjs/common";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AgentEngineService } from "./agent-engine.service";
import { NodeResponse } from "@models/agent.model";
import { Meta } from "@models/meta.model";
import { entry_production } from "./dto/entry-production.dto";
import { Response } from "express";
import { IpRateLimiterGuard } from "./guards/rate-limiter.guard";

@ApiTags("engine")
@Controller("engine")
export class AgentEngineController {
  constructor(private agentEngineService: AgentEngineService) {}

  @Get("flow")
  @ApiOperation({ summary: "Verify Webhook from Meta" })
  verifyWebhook(
    @Query("hub.mode") mode: string,
    @Query("hub.verify_token") token: string,
    @Query("hub.challenge") challenge: string,
  ) {
    return this.agentEngineService.verifyWebhook(mode, token, challenge);
  }

  @Post("flow")
  @UseGuards(IpRateLimiterGuard)
  @ApiOperation({ summary: "Run the production flow" })
  @ApiBody({ schema: { example: entry_production } })
  async runFlowProduction(
    @Body() meta: Meta,
    @Res() res: Response,
  ): Promise<NodeResponse> {
    res.status(HttpStatus.OK).send("EVENT_RECEIVED");
    console.log("✅ Mensaje ha llegado correctamente");
    return this.agentEngineService.runFlowProduction(meta);
  }
}

