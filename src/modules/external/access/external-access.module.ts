import { Module } from "@nestjs/common";
import { ExternalAccessController } from "./external-access.controller";
import { ExternalAccessService } from "./external-access.service";
import { ExternalAccessRepository } from "./external-access.repository";

@Module({
  controllers: [ExternalAccessController],
  providers: [ExternalAccessService, ExternalAccessRepository],
})
export class ExternalAccessModule {}

