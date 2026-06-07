import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { AgentService } from "./agent.service";
import { BotCreateDto } from "./dto/bot/bot-create.dto";
import { BotUpdateDto } from "./dto/bot/bot-update.dto";
import { BotListDto, BotListFiltersDto } from "./dto/bot/bot-list.dto";
import { BotResultDto } from "./dto/bot/bot-result.dto";
import { InstanceCreateDto } from "./dto/instance/instance-create.dto";
import { InstanceUpdateDto } from "./dto/instance/instance-update.dto";
import {
  InstanceListDto,
  InstanceListFiltersDto,
} from "./dto/instance/instance-list.dto";
import { InstanceResultDto } from "./dto/instance/instance-result.dto";
import { BotDeleteResultDto } from "./dto/bot/bot-delete-result.dto";
import { InstanceDeleteResultDto } from "./dto/instance/instance-delete-result.dto";

@ApiTags("agent")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller("admin/agent")
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  // --- BOT (Agent) ENDPOINTS ---

  @Get("find-all")
  @ApiOperation({ summary: "Get all agents paginated" })
  @ApiOkResponse({ type: BotListDto })
  findAllBots(@Query() filters: BotListFiltersDto) {
    return this.agentService.findAllBots(filters);
  }

  @Get("find-one/:id")
  @ApiOperation({ summary: "Get an agent by ID" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BotResultDto })
  findOneBot(@Param("id") id: string) {
    return this.agentService.findOneBot(+id);
  }

  @Post("create")
  @ApiOperation({ summary: "Create an agent" })
  @ApiOkResponse({ type: BotResultDto })
  createBot(@Body() dto: BotCreateDto) {
    return this.agentService.createBot(dto);
  }

  @Patch("update/:id")
  @ApiOperation({ summary: "Update an agent" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BotResultDto })
  updateBot(@Param("id") id: string, @Body() dto: BotUpdateDto) {
    return this.agentService.updateBot(+id, dto);
  }

  @Delete("delete/:id")
  @ApiOperation({ summary: "Delete an agent" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BotDeleteResultDto })
  deleteBot(@Param("id") id: string) {
    return this.agentService.deleteBot(+id);
  }

  // --- INSTANCE ENDPOINTS ---

  @Get("instance/find-all")
  @ApiOperation({ summary: "Get all WhatsApp instances paginated" })
  @ApiOkResponse({ type: InstanceListDto })
  findAllInstances(@Query() filters: InstanceListFiltersDto) {
    return this.agentService.findAllInstances(filters);
  }

  @Get("instance/find-one/:id")
  @ApiOperation({ summary: "Get a WhatsApp instance by ID" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: InstanceResultDto })
  findOneInstance(@Param("id") id: string) {
    return this.agentService.findOneInstance(+id);
  }

  @Post("instance/create")
  @ApiOperation({ summary: "Create a WhatsApp instance" })
  @ApiOkResponse({ type: InstanceResultDto })
  createInstance(@Body() dto: InstanceCreateDto) {
    return this.agentService.createInstance(dto);
  }

  @Patch("instance/update/:id")
  @ApiOperation({ summary: "Update a WhatsApp instance" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: InstanceResultDto })
  updateInstance(@Param("id") id: string, @Body() dto: InstanceUpdateDto) {
    return this.agentService.updateInstance(+id, dto);
  }

  @Delete("instance/delete/:id")
  @ApiOperation({ summary: "Delete a WhatsApp instance" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: InstanceDeleteResultDto })
  deleteInstance(@Param("id") id: string) {
    return this.agentService.deleteInstance(+id);
  }
}
