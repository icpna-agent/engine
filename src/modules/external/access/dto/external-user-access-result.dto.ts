import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ExternalUserAccessUserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  enabled: boolean;

  @ApiProperty()
  enabledFrom: Date;

  @ApiProperty()
  enabledTo: Date;

  @ApiPropertyOptional({ type: Number, nullable: true })
  currentBookId: number | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class ExternalUserAccessResultDto {
  @ApiProperty()
  created: boolean;

  @ApiProperty()
  defaultBookApplied: boolean;

  @ApiProperty()
  defaultBookId: number;

  @ApiProperty({ example: "Intermediate 5" })
  defaultBookEdition: string;

  @ApiProperty({ type: ExternalUserAccessUserDto })
  user: ExternalUserAccessUserDto;
}

