import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class BookUnitResultDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  number: number;

  @ApiProperty()
  title: string;

  @ApiPropertyOptional({ type: [String], nullable: true })
  grammar: string[] | null;

  @ApiPropertyOptional({ type: [String], nullable: true })
  vocabulary: string[] | null;

  @ApiPropertyOptional({ type: [String], nullable: true })
  readingListening: string[] | null;

  @ApiPropertyOptional({ type: [String], nullable: true })
  pronunciation: string[] | null;

  @ApiProperty()
  bookPage: number;

  @ApiProperty()
  bookId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiPropertyOptional({ nullable: true })
  deletedAt: Date | null;
}
