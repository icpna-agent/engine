import { ApiProperty } from "@nestjs/swagger";
import { botModel, type BotModel } from "@db/tables/bot.table";

export class BotResultDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  prompt: string;

  @ApiProperty({ enum: botModel.enumValues })
  model: BotModel;
}
