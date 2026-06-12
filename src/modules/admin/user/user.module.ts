import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserRepository } from "@repositories/user.repository";
import { ChatRepository } from "@repositories/chat.repository";

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, ChatRepository],
  exports: [UserService, UserRepository, ChatRepository],
})
export class UserModule {}
