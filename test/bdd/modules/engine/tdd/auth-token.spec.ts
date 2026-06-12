import { describe, expect, it, jest } from "@jest/globals";
import { UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../../../../../src/modules/auth/auth.service";

describe("AuthService access token", () => {
  it("genera un token de acceso con el payload esperado", async () => {
    const jwtService = {
      sign: jest.fn().mockReturnValue("signed-access-token"),
    };
    const service = new AuthService(jwtService as any);

    const result = await service.login({
      email: "admin@icpna.studio",
      password: "123456",
    });

    expect(jwtService.sign).toHaveBeenCalledWith({
      sub: 1,
      tipo: "usuario",
    });
    expect(result.accessToken).toBe("signed-access-token");
    expect(result.user).toEqual({
      id: 1,
      name: "ICPNA Studio Admin",
      email: "admin@icpna.studio",
      roles: ["admin"],
    });
  });

  it("rechaza credenciales inválidas sin emitir token", async () => {
    const jwtService = {
      sign: jest.fn(),
    };
    const service = new AuthService(jwtService as any);

    await expect(
      service.login({
        email: "admin@icpna.studio",
        password: "bad-password",
      }),
    ).rejects.toBeInstanceOf(UnauthorizedException);

    expect(jwtService.sign).not.toHaveBeenCalled();
  });
});
