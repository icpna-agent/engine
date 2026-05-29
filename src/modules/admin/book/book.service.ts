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
