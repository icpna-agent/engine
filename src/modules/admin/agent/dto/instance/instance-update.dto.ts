import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { whatsappTypeEnum, providerTypeEnum } from "@db/tables/instance.table";

export class InstanceUpdateDto {
  @ApiPropertyOptional({ example: 1 })
  @IsNumber()
  @IsOptional()
  bot_id?: number;

  @ApiPropertyOptional({ enum: whatsappTypeEnum.enumValues, example: "business" })
  @IsEnum(whatsappTypeEnum.enumValues)
  @IsOptional()
  whatsapp_type?: (typeof whatsappTypeEnum.enumValues)[number];

  @ApiPropertyOptional({ enum: providerTypeEnum.enumValues, example: "meta" })
  @IsEnum(providerTypeEnum.enumValues)
  @IsOptional()
  provider_type?: (typeof providerTypeEnum.enumValues)[number];

  @ApiPropertyOptional({ example: "123456789012345" })
  @IsString()
  @IsOptional()
  business_id?: string;

  @ApiPropertyOptional({ example: "987654321098765" })
  @IsString()
  @IsOptional()
  phone_number_id?: string;

  @ApiPropertyOptional({ example: "+51999999999" })
  @IsString()
  @IsOptional()
  display_phone_number?: string;

  @ApiPropertyOptional({ example: "234567890123456" })
  @IsString()
  @IsOptional()
  waba_id?: string;

  @ApiPropertyOptional({ example: "EAAG..." })
  @IsString()
  @IsOptional()
  token?: string;
}
