import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { botModel, type BotModel } from "@db/tables/bot.table";

export class BotCreateDto {
  @ApiProperty({ example: "+51999999999" })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: "ICPNA Agent" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "Eres un asistente de conversación..." })
  @IsString()
  @IsNotEmpty()
  prompt: string;

  @ApiProperty({ enum: botModel.enumValues, example: "gpt" })
  @IsEnum(botModel.enumValues)
  @IsNotEmpty()
  model: BotModel;
}
