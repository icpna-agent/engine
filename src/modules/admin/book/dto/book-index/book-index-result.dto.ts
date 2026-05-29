import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { bookSkillEnum } from "@db/tables/book-index.table";

export class BookIndexResultDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  page: string;

  @ApiProperty({ enum: bookSkillEnum.enumValues })
  skill: (typeof bookSkillEnum.enumValues)[number];

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
