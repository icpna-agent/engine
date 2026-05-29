import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { botModel, type BotModel } from "@db/tables/bot.table";

export class BotUpdateDto {
  @ApiPropertyOptional({ example: "+51999999999" })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional({ example: "ICPNA Agent" })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ example: "Eres un asistente de conversación..." })
  @IsString()
  @IsOptional()
  prompt?: string;

  @ApiPropertyOptional({ enum: botModel.enumValues, example: "gpt" })
  @IsEnum(botModel.enumValues)
  @IsOptional()
  model?: BotModel;
}
