import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class UserResultDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  enabled: boolean;

  @ApiPropertyOptional({ type: Date, nullable: true })
  enabledFrom: Date | null;

  @ApiPropertyOptional({ type: Date, nullable: true })
  enabledTo: Date | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiPropertyOptional({ type: Date, nullable: true })
  deletedAt: Date | null;

  @ApiPropertyOptional({ type: Number, nullable: true })
  currentBookId: number | null;
}
