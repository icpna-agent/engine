import { ApiProperty } from "@nestjs/swagger";

export class UserDeleteResultDto {
  @ApiProperty({ example: true })
  success: boolean;
}
