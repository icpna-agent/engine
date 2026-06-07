import { ApiProperty } from "@nestjs/swagger";

export class BotDeleteResultDto {
  @ApiProperty({ example: true })
  success: boolean;
}
