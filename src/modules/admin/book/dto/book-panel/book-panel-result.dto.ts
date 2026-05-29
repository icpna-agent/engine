import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class BookPanelResultDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiPropertyOptional({ nullable: true })
  theme: string | null;

  @ApiPropertyOptional({ nullable: true })
  subTheme: string | null;

  @ApiPropertyOptional({ nullable: true })
  instruction: string | null;

  @ApiPropertyOptional({ nullable: true })
  content: Record<string, unknown> | null;

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
