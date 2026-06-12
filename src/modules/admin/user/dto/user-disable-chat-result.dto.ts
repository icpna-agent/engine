import { ApiProperty } from "@nestjs/swagger";

export class UserDisableChatResultDto {
  @ApiProperty({ example: true })
  success: boolean;
}
