import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class UserCreateDto {
  @ApiProperty({ example: "+51999999999" })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiPropertyOptional({ default: true })
  @IsBoolean()
  @IsOptional()
  enabled?: boolean;

  @ApiPropertyOptional({ example: "2026-06-06T00:00:00.000Z" })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  enabledFrom?: Date;

  @ApiPropertyOptional({ example: "2026-12-31T23:59:59.000Z" })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  enabledTo?: Date;
}
