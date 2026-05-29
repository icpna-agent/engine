import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { whatsappTypeEnum, providerTypeEnum } from "@db/tables/instance.table";

export class InstanceCreateDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  bot_id: number;

  @ApiProperty({ enum: whatsappTypeEnum.enumValues, example: "business" })
  @IsEnum(whatsappTypeEnum.enumValues)
  @IsNotEmpty()
  whatsapp_type: (typeof whatsappTypeEnum.enumValues)[number];

  @ApiProperty({ enum: providerTypeEnum.enumValues, example: "meta" })
  @IsEnum(providerTypeEnum.enumValues)
  @IsNotEmpty()
  provider_type: (typeof providerTypeEnum.enumValues)[number];

  @ApiProperty({ example: "123456789012345" })
  @IsString()
  @IsNotEmpty()
  business_id: string;

  @ApiProperty({ example: "987654321098765" })
  @IsString()
  @IsNotEmpty()
  phone_number_id: string;

  @ApiProperty({ example: "+51999999999" })
  @IsString()
  @IsNotEmpty()
  display_phone_number: string;

  @ApiProperty({ example: "234567890123456" })
  @IsString()
  @IsNotEmpty()
  waba_id: string;

  @ApiProperty({ example: "EAAG..." })
  @IsString()
  @IsNotEmpty()
  token: string;
}
