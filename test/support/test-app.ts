import {
  Body,
  Controller,
  ExecutionContext,
  Get,
  HttpStatus,
  INestApplication,
  Inject,
  Post,
  Query,
  Res,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { AuthModule } from "../../src/modules/auth/auth.module";
import { BookController } from "../../src/modules/admin/book/book.controller";
import { BookService } from "../../src/modules/admin/book/book.service";
import { AgentController } from "../../src/modules/admin/agent/agent.controller";
import { AgentService } from "../../src/modules/admin/agent/agent.service";
import { UserController } from "../../src/modules/admin/user/user.controller";
import { UserService } from "../../src/modules/admin/user/user.service";
import { IpRateLimiterGuard } from "../../src/modules/admin/engine/guards/rate-limiter.guard";
import { fn } from "jest-mock";

type ServiceOverrides = Record<string, unknown>;

function mockFn() {
  return fn() as any;
}

function paginated(data: Record<string, unknown>[] = []) {
  return {
    data,
    meta: {
      total: data.length,
      page: 1,
      limit: 10,
      totalPages: data.length ? 1 : 0,
      hasNextPage: false,
      hasPreviousPage: false,
    },
  };
}

function createResult(id = 1) {
  return mockFn().mockImplementation((dto: Record<string, unknown>) =>
    Promise.resolve({
      id,
      ...dto,
    }),
  );
}

function updateResult(id = 1) {
  return mockFn().mockImplementation(
    (_resourceId: number, dto: Record<string, unknown>) =>
      Promise.resolve({
        id,
        ...dto,
      }),
  );
}

function deleteResult(payload: Record<string, unknown> = { success: true }) {
  return mockFn().mockResolvedValue(payload);
}

const AGENT_ENGINE_SERVICE = "AGENT_ENGINE_SERVICE";
const jwtTestGuard = {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization as string | undefined;

    if (!authorization?.startsWith("Bearer ")) {
      throw new UnauthorizedException();
    }

    request.user = { sub: 1, tipo: "usuario" };
    return true;
  },
};

@Controller("engine")
class EngineFlowTestController {
  constructor(
    @Inject(AGENT_ENGINE_SERVICE)
    private readonly agentEngineService: {
      verifyWebhook: (
        mode: string,
        token: string,
        challenge: string,
      ) => string;
      runFlowProduction: (meta: Record<string, unknown>) => Promise<unknown>;
    },
  ) {}

  @Get("flow")
  verifyWebhook(
    @Query("hub.mode") mode: string,
    @Query("hub.verify_token") token: string,
    @Query("hub.challenge") challenge: string,
  ) {
    return this.agentEngineService.verifyWebhook(mode, token, challenge);
  }

  @Post("flow")
  @UseGuards(IpRateLimiterGuard)
  async runFlowProduction(
    @Body() meta: Record<string, unknown>,
    @Res() res: Response,
  ) {
    res.status(HttpStatus.OK).send("EVENT_RECEIVED");
    return this.agentEngineService.runFlowProduction(meta);
  }
}

export async function createBookTestApp(
  overrides: ServiceOverrides = {},
) {
  const bookService = {
    findAllBooks: mockFn().mockResolvedValue(
      paginated([{ id: 1, title: "American Big Picture" }]),
    ),
    createBook: createResult(),
    updateBook: updateResult(),
    deleteBook: deleteResult({ id: 1, deleted: true }),
    findAllBookIndexes: mockFn().mockResolvedValue(
      paginated([{ id: 1, title: "Functional Language: Breaking the ice" }]),
    ),
    createBookIndex: createResult(),
    updateBookIndex: updateResult(),
    deleteBookIndex: deleteResult({ id: 1, deleted: true }),
    findAllBookUnits: mockFn().mockResolvedValue(
      paginated([{ id: 1, number: 7, title: "Is This Yours?" }]),
    ),
    createBookUnit: createResult(),
    updateBookUnit: updateResult(),
    deleteBookUnit: deleteResult({ id: 1, deleted: true }),
    findAllBookLessons: mockFn().mockResolvedValue(
      paginated([{ id: 1, title: "Say Yes to Mess" }]),
    ),
    createBookLesson: createResult(),
    updateBookLesson: updateResult(),
    deleteBookLesson: deleteResult({ id: 1, deleted: true }),
    findAllBookPanels: mockFn().mockResolvedValue(
      paginated([{ id: 1, title: "Quantifiers" }]),
    ),
    createBookPanel: createResult(),
    updateBookPanel: updateResult(),
    deleteBookPanel: deleteResult({ id: 1, deleted: true }),
    findAllBookAudios: mockFn().mockResolvedValue(
      paginated([{ id: 1, audioIndex: "7.1" }]),
    ),
    createBookAudio: createResult(),
    updateBookAudio: updateResult(),
    deleteBookAudio: deleteResult({ id: 1, deleted: true }),
    findAllBookImages: mockFn().mockResolvedValue(
      paginated([{ id: 1, bookPage: 2 }]),
    ),
    createBookImage: createResult(),
    updateBookImage: updateResult(),
    deleteBookImage: deleteResult({ id: 1, deleted: true }),
    ...overrides,
  };

  const moduleRef = await Test.createTestingModule({
    imports: [AuthModule],
    controllers: [BookController],
    providers: [{ provide: BookService, useValue: bookService }],
  })
    .overrideGuard(AuthGuard("jwt"))
    .useValue(jwtTestGuard)
    .compile();

  const app = moduleRef.createNestApplication();
  await app.init();

  return { app, bookService };
}

export async function createAgentTestApp(
  overrides: ServiceOverrides = {},
) {
  const agentService = {
    findAllBots: mockFn().mockResolvedValue(
      paginated([{ id: 1, name: "ICPNA Studio" }]),
    ),
    createBot: createResult(),
    updateBot: updateResult(),
    deleteBot: deleteResult(),
    findAllInstances: mockFn().mockResolvedValue(
      paginated([{ id: 1, bot_id: 1, provider_type: "meta" }]),
    ),
    createInstance: createResult(),
    updateInstance: updateResult(),
    deleteInstance: deleteResult(),
    ...overrides,
  };

  const moduleRef = await Test.createTestingModule({
    imports: [AuthModule],
    controllers: [AgentController],
    providers: [{ provide: AgentService, useValue: agentService }],
  })
    .overrideGuard(AuthGuard("jwt"))
    .useValue(jwtTestGuard)
    .compile();

  const app = moduleRef.createNestApplication();
  await app.init();

  return { app, agentService };
}

export async function createUserTestApp(
  overrides: ServiceOverrides = {},
) {
  const userService = {
    findAll: mockFn().mockResolvedValue(
      paginated([{ id: 1, phone: "+51988887777" }]),
    ),
    create: createResult(),
    update: updateResult(),
    delete: deleteResult(),
    ...overrides,
  };

  const moduleRef = await Test.createTestingModule({
    imports: [AuthModule],
    controllers: [UserController],
    providers: [{ provide: UserService, useValue: userService }],
  })
    .overrideGuard(AuthGuard("jwt"))
    .useValue(jwtTestGuard)
    .compile();

  const app = moduleRef.createNestApplication();
  await app.init();

  return { app, userService };
}

export async function createEngineTestApp(
  overrides: ServiceOverrides = {},
) {
  const agentEngineService = {
    verifyWebhook: mockFn().mockImplementation((mode, token, challenge) => {
      return mode === "subscribe" && token === "erixcel"
        ? challenge
        : "Forbidden";
    }),
    runFlowProduction: mockFn().mockResolvedValue({ ok: true }),
    ...overrides,
  };

  const moduleRef = await Test.createTestingModule({
    controllers: [EngineFlowTestController],
    providers: [
      { provide: AGENT_ENGINE_SERVICE, useValue: agentEngineService },
    ],
  }).compile();

  const app = moduleRef.createNestApplication();
  await app.init();

  return { app, agentEngineService };
}

export async function closeApp(app?: INestApplication) {
  if (app) {
    await app.close();
  }
}
