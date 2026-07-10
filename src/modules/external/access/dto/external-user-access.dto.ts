import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class ExternalUserAccessDto {
  @ApiProperty({
    example: "51912345678",
    description: "Teléfono del usuario que será registrado o renovado desde un servidor externo.",
  })
  @IsString()
  @IsNotEmpty()
  phone: string;
}

