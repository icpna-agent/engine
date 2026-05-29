import { ApiProperty } from "@nestjs/swagger";
import { whatsappTypeEnum, providerTypeEnum } from "@db/tables/instance.table";

export class InstanceResultDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  bot_id: number;

  @ApiProperty({ enum: whatsappTypeEnum.enumValues })
  whatsapp_type: (typeof whatsappTypeEnum.enumValues)[number];

  @ApiProperty({ enum: providerTypeEnum.enumValues })
  provider_type: (typeof providerTypeEnum.enumValues)[number];

  @ApiProperty()
  business_id: string;

  @ApiProperty()
  phone_number_id: string;

  @ApiProperty()
  display_phone_number: string;

  @ApiProperty()
  waba_id: string;

  @ApiProperty()
  token: string;
}
