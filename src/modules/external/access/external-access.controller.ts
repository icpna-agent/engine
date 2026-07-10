import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ExternalAccessService } from "./external-access.service";
import { ExternalUserAccessDto } from "./dto/external-user-access.dto";
import { ExternalUserAccessResultDto } from "./dto/external-user-access-result.dto";

@ApiTags("external-access")
@Controller("external/access")
export class ExternalAccessController {
  constructor(private readonly externalAccessService: ExternalAccessService) {}

  @Post("user")
  @ApiOperation({
    summary: "Registra o renueva acceso de usuario desde un servidor externo",
    description:
      "Crea o actualiza un usuario por teléfono. Si no tiene libro asignado, asigna Intermediate 5. Siempre renueva enabledFrom y enabledTo por un mes desde la ejecución.",
  })
  @ApiOkResponse({
    type: ExternalUserAccessResultDto,
    description: "Usuario registrado o renovado correctamente",
  })
  upsertUserAccess(
    @Body() dto: ExternalUserAccessDto,
  ): Promise<ExternalUserAccessResultDto> {
    return this.externalAccessService.upsertUserAccess(dto);
  }
}

