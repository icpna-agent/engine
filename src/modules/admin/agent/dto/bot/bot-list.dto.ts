import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { botModel, type BotModel } from "@db/tables/bot.table";
import { PaginationMetaDto } from "../../../book/dto/pagination-meta.dto";
import { BotResultDto } from "./bot-result.dto";

export class BotListFiltersDto {
  @ApiPropertyOptional({ default: 1 })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  page?: number = 1;

  @ApiPropertyOptional({ default: 10 })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  limit?: number = 10;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  search?: string;

  @ApiPropertyOptional({ enum: botModel.enumValues })
  @IsEnum(botModel.enumValues)
  @IsOptional()
  model?: BotModel;
}

export class BotListDto {
  @ApiProperty({ type: [BotResultDto] })
  data: BotResultDto[];

  @ApiProperty({ type: PaginationMetaDto })
  meta: PaginationMetaDto;
}
