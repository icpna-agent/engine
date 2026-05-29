import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { bookSkillEnum } from "@db/tables/book-index.table";

export class BookLessonResultDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  unitNumber: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ enum: bookSkillEnum.enumValues })
  skill: (typeof bookSkillEnum.enumValues)[number];

  @ApiPropertyOptional({ nullable: true })
  topic: string | null;

  @ApiPropertyOptional({ nullable: true })
  activityNumber: number | null;

  @ApiPropertyOptional({ nullable: true })
  letterNumber: string | null;

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
