import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { LoginResultDto, UserLoginInfoDto } from "./dto/login-result.dto";

@Injectable()
export class AuthService {
  private readonly hardcodedUser: UserLoginInfoDto & { password: string } = {
    id: 1,
    name: "ICPNA Studio Admin",
    email: "admin@icpna.studio",
    password: "123456",
    roles: ["admin"],
  };

  constructor(private readonly jwtService: JwtService) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<UserLoginInfoDto | null> {
    const isValidEmail = email === this.hardcodedUser.email;
    const isValidPassword = pass === this.hardcodedUser.password;

    if (!isValidEmail || !isValidPassword) return null;

    const { password, ...user } = this.hardcodedUser;
    return user;
  }

  async login(loginDto: LoginDto): Promise<LoginResultDto> {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException("Credenciales inválidas");
    }

    const payload = { sub: user.id, tipo: "usuario" as const };

    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }
}
