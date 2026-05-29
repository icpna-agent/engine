import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class BookImageResultDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  bookPage: number;

  @ApiPropertyOptional({ nullable: true })
  metaMediaId: number | null;

  @ApiProperty()
  bookId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiPropertyOptional({ nullable: true })
  deletedAt: Date | null;
}
