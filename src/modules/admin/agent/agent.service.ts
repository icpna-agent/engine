import { Injectable, NotFoundException } from "@nestjs/common";
import { BotRepository } from "@repositories/bot.repository";
import { InstanceRepository } from "@repositories/instance.repository";
import { BotCreateDto } from "./dto/bot/bot-create.dto";
import { BotUpdateDto } from "./dto/bot/bot-update.dto";
import { BotListFiltersDto } from "./dto/bot/bot-list.dto";
import { InstanceCreateDto } from "./dto/instance/instance-create.dto";
import { InstanceUpdateDto } from "./dto/instance/instance-update.dto";
import { InstanceListFiltersDto } from "./dto/instance/instance-list.dto";

@Injectable()
export class AgentService {
  constructor(
    private readonly botRepository: BotRepository,
    private readonly instanceRepository: InstanceRepository,
  ) {}

  private buildPaginatedResponse<T>(
    data: T[],
    total: number,
    page = 1,
    limit = 10,
  ) {
    const totalPages = Math.ceil(total / limit);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    };
  }

  // --- BOT (Agent) CRUD ---

  async findAllBots(filters: BotListFiltersDto) {
    const { page = 1, limit = 10, ...rest } = filters;
    const { data, total } = await this.botRepository.findAllPaginated(
      page,
      limit,
      rest,
    );
    return this.buildPaginatedResponse(data, total, page, limit);
  }

  async findOneBot(id: number) {
    const bot = await this.botRepository.findById(id);
    if (!bot) throw new NotFoundException("Agent not found");
    return bot;
  }

  createBot(dto: BotCreateDto) {
    return this.botRepository.create(dto);
  }

  async updateBot(id: number, dto: BotUpdateDto) {
    await this.findOneBot(id);
    return this.botRepository.update(id, dto);
  }

  async deleteBot(id: number) {
    await this.findOneBot(id);
    await this.botRepository.delete(id);
    return { success: true };
  }

  // --- INSTANCE CRUD ---

  async findAllInstances(filters: InstanceListFiltersDto) {
    const { page = 1, limit = 10, ...rest } = filters;
    const { data, total } = await this.instanceRepository.findAllPaginated(
      page,
      limit,
      {
        search: rest.search,
        botId: rest.botId,
      },
    );
    return this.buildPaginatedResponse(data, total, page, limit);
  }

  async findOneInstance(id: number) {
    const instance = await this.instanceRepository.findById(id);
    if (!instance) throw new NotFoundException("Instance not found");
    return instance;
  }

  async createInstance(dto: InstanceCreateDto) {
    // Validate bot existence
    await this.findOneBot(dto.bot_id);
    return this.instanceRepository.create(dto);
  }

  async updateInstance(id: number, dto: InstanceUpdateDto) {
    await this.findOneInstance(id);
    if (dto.bot_id) {
      await this.findOneBot(dto.bot_id);
    }
    return this.instanceRepository.update(id, dto);
  }

  async deleteInstance(id: number) {
    await this.findOneInstance(id);
    await this.instanceRepository.delete(id);
    return { success: true };
  }
}
