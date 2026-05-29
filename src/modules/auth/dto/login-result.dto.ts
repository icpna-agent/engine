import { ApiProperty } from "@nestjs/swagger";

export class UserLoginInfoDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: "ICPNA Studio Admin" })
  name: string;

  @ApiProperty({ example: "admin@icpna.studio" })
  email: string;

  @ApiProperty({ example: ["admin"], type: [String] })
  roles: string[];
}

export class LoginResultDto {
  @ApiProperty({ description: "JWT Access Token" })
  accessToken: string;

  @ApiProperty({ type: UserLoginInfoDto, description: "User information" })
  user: UserLoginInfoDto;
}
