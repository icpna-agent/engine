import { Injectable, NotFoundException } from "@nestjs/common";
import { BookRepository } from "@repositories/book.repository";
import { BookIndexRepository } from "@repositories/book-index.repository";
import { BookUnitRepository } from "@repositories/book-unit.repository";
import { BookLessonRepository } from "@repositories/book-lesson.repository";
import { BookPanelRepository } from "@repositories/book-panel.repository";
import { BookAudioRepository } from "@repositories/book-audio.repository";
import { BookImageRepository } from "@repositories/book-image.repository";
import { BookCreateDto } from "./dto/book/book-create.dto";
import { BookUpdateDto } from "./dto/book/book-update.dto";
import { BookListFiltersDto } from "./dto/book/book-list.dto";
import { BookIndexCreateDto } from "./dto/book-index/book-index-create.dto";
import { BookIndexUpdateDto } from "./dto/book-index/book-index-update.dto";
import { BookIndexListFiltersDto } from "./dto/book-index/book-index-list.dto";
import { BookUnitCreateDto } from "./dto/book-unit/book-unit-create.dto";
import { BookUnitUpdateDto } from "./dto/book-unit/book-unit-update.dto";
import { BookUnitListFiltersDto } from "./dto/book-unit/book-unit-list.dto";
import { BookLessonCreateDto } from "./dto/book-lesson/book-lesson-create.dto";
import { BookLessonUpdateDto } from "./dto/book-lesson/book-lesson-update.dto";
import { BookLessonListFiltersDto } from "./dto/book-lesson/book-lesson-list.dto";
import { BookPanelCreateDto } from "./dto/book-panel/book-panel-create.dto";
import { BookPanelUpdateDto } from "./dto/book-panel/book-panel-update.dto";
import { BookPanelListFiltersDto } from "./dto/book-panel/book-panel-list.dto";
import { BookAudioCreateDto } from "./dto/book-audio/book-audio-create.dto";
import { BookAudioUpdateDto } from "./dto/book-audio/book-audio-update.dto";
import { BookAudioListFiltersDto } from "./dto/book-audio/book-audio-list.dto";
import { BookImageCreateDto } from "./dto/book-image/book-image-create.dto";
import { BookImageUpdateDto } from "./dto/book-image/book-image-update.dto";
import { BookImageListFiltersDto } from "./dto/book-image/book-image-list.dto";
import { database } from "@db/connection.db";
import { bookIndex } from "@db/tables/book-index.table";
import { bookUnit } from "@db/tables/book-unit.table";
import { bookLesson } from "@db/tables/book-lesson.table";
import { bookPanel } from "@db/tables/book-panel.table";
import { bookAudio } from "@db/tables/book-audio.table";
import { bookImage } from "@db/tables/book-image.table";
import { and, eq, isNull, or } from "drizzle-orm";

@Injectable()
export class BookService {
  constructor(
    private readonly bookRepository: BookRepository,
    private readonly bookIndexRepository: BookIndexRepository,
    private readonly bookUnitRepository: BookUnitRepository,
    private readonly bookLessonRepository: BookLessonRepository,
    private readonly bookPanelRepository: BookPanelRepository,
    private readonly bookAudioRepository: BookAudioRepository,
    private readonly bookImageRepository: BookImageRepository,
  ) {}

  private buildPaginatedResponse<T>(
    data: T[],
    total: number,
    page = 1,
    limit = 10,
  ) {
    const totalPages = Math.ceil(total / limit);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    };
  }

  private async ensureBookExists(bookId: number) {
    const book = await this.bookRepository.findOne(bookId);
    if (!book) throw new NotFoundException("Book not found");
    return book;
  }

  private async findActiveBookIndexDuplicate(dto: BookIndexCreateDto) {
    const [existing] = await database
      .select()
      .from(bookIndex)
      .where(
        and(
          eq(bookIndex.bookId, dto.bookId),
          eq(bookIndex.title, dto.title),
          eq(bookIndex.page, dto.page),
          eq(bookIndex.skill, dto.skill),
          isNull(bookIndex.deletedAt),
        ),
      );
    return existing;
  }

  private async findActiveBookUnitDuplicate(dto: BookUnitCreateDto) {
    const [existing] = await database
      .select()
      .from(bookUnit)
      .where(
        and(
          eq(bookUnit.bookId, dto.bookId),
          eq(bookUnit.number, dto.number),
          isNull(bookUnit.deletedAt),
        ),
      );
    return existing;
  }

  private async findActiveBookLessonDuplicate(dto: BookLessonCreateDto) {
    const conditions = [
      eq(bookLesson.bookId, dto.bookId),
      eq(bookLesson.bookPage, dto.bookPage),
      eq(bookLesson.unitNumber, dto.unitNumber),
      eq(bookLesson.title, dto.title),
      eq(bookLesson.skill, dto.skill),
      isNull(bookLesson.deletedAt),
    ];

    if (dto.activityNumber !== undefined && dto.activityNumber !== null) {
      conditions.push(eq(bookLesson.activityNumber, dto.activityNumber));
    }

    if (dto.letterNumber) {
      conditions.push(eq(bookLesson.letterNumber, dto.letterNumber));
    }

    const [existing] = await database
      .select()
      .from(bookLesson)
      .where(and(...conditions));
    return existing;
  }

  private async findActiveBookPanelDuplicate(dto: BookPanelCreateDto) {
    const conditions = [
      eq(bookPanel.bookId, dto.bookId),
      eq(bookPanel.bookPage, dto.bookPage),
      eq(bookPanel.title, dto.title),
      isNull(bookPanel.deletedAt),
    ];

    if (dto.theme) {
      conditions.push(eq(bookPanel.theme, dto.theme));
    }

    if (dto.subTheme) {
      conditions.push(eq(bookPanel.subTheme, dto.subTheme));
    }

    const [existing] = await database
      .select()
      .from(bookPanel)
      .where(and(...conditions));
    return existing;
  }

  private async findActiveBookAudioDuplicate(dto: BookAudioCreateDto) {
    const duplicateByAudioIndex = and(
      eq(bookAudio.bookId, dto.bookId),
      eq(bookAudio.audioIndex, dto.audioIndex),
      isNull(bookAudio.deletedAt),
    );

    const isPlaceholderUrl = dto.url.includes("example.com/placeholder-audio");
    const duplicateByUrl = !isPlaceholderUrl
      ? and(
          eq(bookAudio.bookId, dto.bookId),
          eq(bookAudio.url, dto.url),
          isNull(bookAudio.deletedAt),
        )
      : undefined;

    const [existing] = await database
      .select()
      .from(bookAudio)
      .where(duplicateByUrl ? or(duplicateByAudioIndex, duplicateByUrl) : duplicateByAudioIndex);
    return existing;
  }

  async findActiveBookImageByBookAndPage(bookId: number, bookPage: number) {
    const [existing] = await database
      .select()
      .from(bookImage)
      .where(
        and(
          eq(bookImage.bookId, bookId),
          eq(bookImage.bookPage, bookPage),
          isNull(bookImage.deletedAt),
        ),
      );
    return existing;
  }

  async findAllBooks(filters: BookListFiltersDto) {
    const { page = 1, limit = 10, ...rest } = filters;
    const { data, total } = await this.bookRepository.findAllPaginated(
      page,
      limit,
      rest,
    );
    return this.buildPaginatedResponse(data, total, page, limit);
  }

  async findOneBook(id: number) {
    const book = await this.bookRepository.findOne(id);
    if (!book) throw new NotFoundException("Book not found");
    return book;
  }

  createBook(dto: BookCreateDto) {
    return this.bookRepository.create(dto);
  }

  async updateBook(id: number, dto: BookUpdateDto) {
    await this.findOneBook(id);
    return this.bookRepository.update(id, dto);
  }

  async deleteBook(id: number) {
    await this.findOneBook(id);
    return this.bookRepository.delete(id);
  }

  async findAllBookIndexes(filters: BookIndexListFiltersDto) {
    const { page = 1, limit = 10, ...rest } = filters;
    const { data, total } = await this.bookIndexRepository.findAllPaginated(
      page,
      limit,
      rest,
    );
    return this.buildPaginatedResponse(data, total, page, limit);
  }

  async findOneBookIndex(id: number) {
    const bookIndex = await this.bookIndexRepository.findOne(id);
    if (!bookIndex) throw new NotFoundException("Book index not found");
    return bookIndex;
  }

  async createBookIndex(dto: BookIndexCreateDto) {
    await this.ensureBookExists(dto.bookId);
    const existing = await this.findActiveBookIndexDuplicate(dto);
    if (existing) return existing;
    return this.bookIndexRepository.create(dto);
  }

  async updateBookIndex(id: number, dto: BookIndexUpdateDto) {
    await this.findOneBookIndex(id);
    if (dto.bookId) await this.ensureBookExists(dto.bookId);
    return this.bookIndexRepository.update(id, dto);
  }

  async deleteBookIndex(id: number) {
    await this.findOneBookIndex(id);
    return this.bookIndexRepository.delete(id);
  }

  async findAllBookUnits(filters: BookUnitListFiltersDto) {
    const { page = 1, limit = 10, ...rest } = filters;
    const { data, total } = await this.bookUnitRepository.findAllPaginated(
      page,
      limit,
      rest,
    );
    return this.buildPaginatedResponse(data, total, page, limit);
  }

  async findOneBookUnit(id: number) {
    const unit = await this.bookUnitRepository.findOne(id);
    if (!unit) throw new NotFoundException("Book unit not found");
    return unit;
  }

  async createBookUnit(dto: BookUnitCreateDto) {
    await this.ensureBookExists(dto.bookId);
    const existing = await this.findActiveBookUnitDuplicate(dto);
    if (existing) return existing;
    return this.bookUnitRepository.create(dto);
  }

  async updateBookUnit(id: number, dto: BookUnitUpdateDto) {
    await this.findOneBookUnit(id);
    if (dto.bookId) await this.ensureBookExists(dto.bookId);
    return this.bookUnitRepository.update(id, dto);
  }

  async deleteBookUnit(id: number) {
    await this.findOneBookUnit(id);
    return this.bookUnitRepository.delete(id);
  }

  async findAllBookLessons(filters: BookLessonListFiltersDto) {
    const { page = 1, limit = 10, ...rest } = filters;
    const { data, total } = await this.bookLessonRepository.findAllPaginated(
      page,
      limit,
      rest,
    );
    return this.buildPaginatedResponse(data, total, page, limit);
  }

  async findOneBookLesson(id: number) {
    const lesson = await this.bookLessonRepository.findOne(id);
    if (!lesson) throw new NotFoundException("Book lesson not found");
    return lesson;
  }

  async createBookLesson(dto: BookLessonCreateDto) {
    await this.ensureBookExists(dto.bookId);
    const existing = await this.findActiveBookLessonDuplicate(dto);
    if (existing) return existing;
    return this.bookLessonRepository.create(dto);
  }

  async updateBookLesson(id: number, dto: BookLessonUpdateDto) {
    await this.findOneBookLesson(id);
    if (dto.bookId) await this.ensureBookExists(dto.bookId);
    return this.bookLessonRepository.update(id, dto);
  }

  async deleteBookLesson(id: number) {
    await this.findOneBookLesson(id);
    return this.bookLessonRepository.delete(id);
  }

  async findAllBookPanels(filters: BookPanelListFiltersDto) {
    const { page = 1, limit = 10, ...rest } = filters;
    const { data, total } = await this.bookPanelRepository.findAllPaginated(
      page,
      limit,
      rest,
    );
    return this.buildPaginatedResponse(data, total, page, limit);
  }

  async findOneBookPanel(id: number) {
    const panel = await this.bookPanelRepository.findOne(id);
    if (!panel) throw new NotFoundException("Book panel not found");
    return panel;
  }

  async createBookPanel(dto: BookPanelCreateDto) {
    await this.ensureBookExists(dto.bookId);
    const existing = await this.findActiveBookPanelDuplicate(dto);
    if (existing) return existing;
    return this.bookPanelRepository.create(dto);
  }

  async updateBookPanel(id: number, dto: BookPanelUpdateDto) {
    await this.findOneBookPanel(id);
    if (dto.bookId) await this.ensureBookExists(dto.bookId);
    return this.bookPanelRepository.update(id, dto);
  }

  async deleteBookPanel(id: number) {
    await this.findOneBookPanel(id);
    return this.bookPanelRepository.delete(id);
  }

  async findAllBookAudios(filters: BookAudioListFiltersDto) {
    const { page = 1, limit = 10, ...rest } = filters;
    const { data, total } = await this.bookAudioRepository.findAllPaginated(
      page,
      limit,
      rest,
    );
    return this.buildPaginatedResponse(data, total, page, limit);
  }

  async findOneBookAudio(id: number) {
    const audio = await this.bookAudioRepository.findOne(id);
    if (!audio) throw new NotFoundException("Book audio not found");
    return audio;
  }

  async createBookAudio(dto: BookAudioCreateDto) {
    await this.ensureBookExists(dto.bookId);
    const existing = await this.findActiveBookAudioDuplicate(dto);
    if (existing) return existing;
    return this.bookAudioRepository.create(dto);
  }

  async updateBookAudio(id: number, dto: BookAudioUpdateDto) {
    await this.findOneBookAudio(id);
    if (dto.bookId) await this.ensureBookExists(dto.bookId);
    return this.bookAudioRepository.update(id, dto);
  }

  async deleteBookAudio(id: number) {
    await this.findOneBookAudio(id);
    return this.bookAudioRepository.delete(id);
  }

  async findAllBookImages(filters: BookImageListFiltersDto) {
    const { page = 1, limit = 10, ...rest } = filters;
    const { data, total } = await this.bookImageRepository.findAllPaginated(
      page,
      limit,
      rest,
    );
    return this.buildPaginatedResponse(data, total, page, limit);
  }

  async findOneBookImage(id: number) {
    const image = await this.bookImageRepository.findOne(id);
    if (!image) throw new NotFoundException("Book image not found");
    return image;
  }

  async createBookImage(dto: BookImageCreateDto) {
    await this.ensureBookExists(dto.bookId);
    const existing = await this.findActiveBookImageByBookAndPage(
      dto.bookId,
      dto.bookPage,
    );
    if (existing) return existing;
    return this.bookImageRepository.create(dto);
  }

  async updateBookImage(id: number, dto: BookImageUpdateDto) {
    await this.findOneBookImage(id);
    if (dto.bookId) await this.ensureBookExists(dto.bookId);
    return this.bookImageRepository.update(id, dto);
  }

  async deleteBookImage(id: number) {
    await this.findOneBookImage(id);
    return this.bookImageRepository.delete(id);
  }
}
