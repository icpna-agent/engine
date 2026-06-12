import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "@repositories/user.repository";
import { ChatRepository } from "@repositories/chat.repository";
import { UserCreateDto } from "./dto/user-create.dto";
import { UserUpdateDto } from "./dto/user-update.dto";
import { UserListFiltersDto } from "./dto/user-list.dto";

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly chatRepository: ChatRepository,
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

  async findAll(filters: UserListFiltersDto) {
    const { page = 1, limit = 10, ...rest } = filters;
    const { data, total } = await this.userRepository.findAllPaginated(
      page,
      limit,
      rest,
    );
    return this.buildPaginatedResponse(data, total, page, limit);
  }

  async findOne(id: number) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async create(dto: UserCreateDto) {
    const existing = await this.userRepository.findByPhone(dto.phone);
    if (existing) {
      throw new ConflictException(`Phone number ${dto.phone} is already in use`);
    }
    return this.userRepository.create(dto);
  }

  async update(id: number, dto: UserUpdateDto) {
    await this.findOne(id);

    if (dto.phone) {
      const existing = await this.userRepository.findByPhone(dto.phone);
      if (existing && existing.id !== id) {
        throw new ConflictException(`Phone number ${dto.phone} is already in use`);
      }
    }

    return this.userRepository.update(id, dto);
  }

  async delete(id: number) {
    await this.findOne(id);
    await this.userRepository.delete(id);
    return { success: true };
  }

  async disableChat(userId: number) {
    await this.findOne(userId);

    const lastChat = await this.chatRepository.findLastByUserId(userId);
    if (lastChat) {
      await this.chatRepository.update(lastChat.id, { enabled: false });
    }

    return { success: true };
  }
}
