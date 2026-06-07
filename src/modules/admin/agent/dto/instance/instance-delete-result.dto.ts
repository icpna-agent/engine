import { ApiProperty } from "@nestjs/swagger";

export class InstanceDeleteResultDto {
  @ApiProperty({ example: true })
  success: boolean;
}
