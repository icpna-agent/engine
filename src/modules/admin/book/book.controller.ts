import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { BookService } from "./book.service";
import { BookCreateDto } from "./dto/book/book-create.dto";
import { BookListDto, BookListFiltersDto } from "./dto/book/book-list.dto";
import { BookResultDto } from "./dto/book/book-result.dto";
import { BookUpdateDto } from "./dto/book/book-update.dto";
import { BookIndexCreateDto } from "./dto/book-index/book-index-create.dto";
import {
  BookIndexListDto,
  BookIndexListFiltersDto,
} from "./dto/book-index/book-index-list.dto";
import { BookIndexResultDto } from "./dto/book-index/book-index-result.dto";
import { BookIndexUpdateDto } from "./dto/book-index/book-index-update.dto";
import { BookUnitCreateDto } from "./dto/book-unit/book-unit-create.dto";
import {
  BookUnitListDto,
  BookUnitListFiltersDto,
} from "./dto/book-unit/book-unit-list.dto";
import { BookUnitResultDto } from "./dto/book-unit/book-unit-result.dto";
import { BookUnitUpdateDto } from "./dto/book-unit/book-unit-update.dto";
import { BookLessonCreateDto } from "./dto/book-lesson/book-lesson-create.dto";
import {
  BookLessonListDto,
  BookLessonListFiltersDto,
} from "./dto/book-lesson/book-lesson-list.dto";
import { BookLessonResultDto } from "./dto/book-lesson/book-lesson-result.dto";
import { BookLessonUpdateDto } from "./dto/book-lesson/book-lesson-update.dto";
import { BookPanelCreateDto } from "./dto/book-panel/book-panel-create.dto";
import {
  BookPanelListDto,
  BookPanelListFiltersDto,
} from "./dto/book-panel/book-panel-list.dto";
import { BookPanelResultDto } from "./dto/book-panel/book-panel-result.dto";
import { BookPanelUpdateDto } from "./dto/book-panel/book-panel-update.dto";
import { BookAudioCreateDto } from "./dto/book-audio/book-audio-create.dto";
import {
  BookAudioListDto,
  BookAudioListFiltersDto,
} from "./dto/book-audio/book-audio-list.dto";
import { BookAudioResultDto } from "./dto/book-audio/book-audio-result.dto";
import { BookAudioUpdateDto } from "./dto/book-audio/book-audio-update.dto";
import { BookImageCreateDto } from "./dto/book-image/book-image-create.dto";
import {
  BookImageListDto,
  BookImageListFiltersDto,
} from "./dto/book-image/book-image-list.dto";
import { BookImageResultDto } from "./dto/book-image/book-image-result.dto";
import { BookImageUpdateDto } from "./dto/book-image/book-image-update.dto";

@ApiTags("book")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller("admin/book")
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get("find-all")
  @ApiOperation({ summary: "Get all books paginated" })
  @ApiOkResponse({ type: BookListDto })
  findAllBooks(@Query() filters: BookListFiltersDto) {
    return this.bookService.findAllBooks(filters);
  }

  @Get("find-one/:id")
  @ApiOperation({ summary: "Get a book by ID" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookResultDto })
  findOneBook(@Param("id") id: string) {
    return this.bookService.findOneBook(+id);
  }

  @Post("create")
  @ApiOperation({ summary: "Create a book" })
  @ApiOkResponse({ type: BookResultDto })
  createBook(@Body() dto: BookCreateDto) {
    return this.bookService.createBook(dto);
  }

  @Patch("update/:id")
  @ApiOperation({ summary: "Update a book" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookResultDto })
  updateBook(@Param("id") id: string, @Body() dto: BookUpdateDto) {
    return this.bookService.updateBook(+id, dto);
  }

  @Delete("delete/:id")
  @ApiOperation({ summary: "Soft delete a book" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookResultDto })
  deleteBook(@Param("id") id: string) {
    return this.bookService.deleteBook(+id);
  }

  @Get("index/find-all")
  @ApiOperation({ summary: "Get all book index rows paginated" })
  @ApiOkResponse({ type: BookIndexListDto })
  findAllBookIndexes(@Query() filters: BookIndexListFiltersDto) {
    return this.bookService.findAllBookIndexes(filters);
  }

  @Get("index/find-one/:id")
  @ApiOperation({ summary: "Get a book index row by ID" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookIndexResultDto })
  findOneBookIndex(@Param("id") id: string) {
    return this.bookService.findOneBookIndex(+id);
  }

  @Post("index/create")
  @ApiOperation({ summary: "Create a book index row" })
  @ApiOkResponse({ type: BookIndexResultDto })
  createBookIndex(@Body() dto: BookIndexCreateDto) {
    return this.bookService.createBookIndex(dto);
  }

  @Patch("index/update/:id")
  @ApiOperation({ summary: "Update a book index row" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookIndexResultDto })
  updateBookIndex(@Param("id") id: string, @Body() dto: BookIndexUpdateDto) {
    return this.bookService.updateBookIndex(+id, dto);
  }

  @Delete("index/delete/:id")
  @ApiOperation({ summary: "Soft delete a book index row" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookIndexResultDto })
  deleteBookIndex(@Param("id") id: string) {
    return this.bookService.deleteBookIndex(+id);
  }

  @Get("unit/find-all")
  @ApiOperation({ summary: "Get all book units paginated" })
  @ApiOkResponse({ type: BookUnitListDto })
  findAllBookUnits(@Query() filters: BookUnitListFiltersDto) {
    return this.bookService.findAllBookUnits(filters);
  }

  @Get("unit/find-one/:id")
  @ApiOperation({ summary: "Get a book unit by ID" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookUnitResultDto })
  findOneBookUnit(@Param("id") id: string) {
    return this.bookService.findOneBookUnit(+id);
  }

  @Post("unit/create")
  @ApiOperation({ summary: "Create a book unit" })
  @ApiOkResponse({ type: BookUnitResultDto })
  createBookUnit(@Body() dto: BookUnitCreateDto) {
    return this.bookService.createBookUnit(dto);
  }

  @Patch("unit/update/:id")
  @ApiOperation({ summary: "Update a book unit" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookUnitResultDto })
  updateBookUnit(@Param("id") id: string, @Body() dto: BookUnitUpdateDto) {
    return this.bookService.updateBookUnit(+id, dto);
  }

  @Delete("unit/delete/:id")
  @ApiOperation({ summary: "Soft delete a book unit" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookUnitResultDto })
  deleteBookUnit(@Param("id") id: string) {
    return this.bookService.deleteBookUnit(+id);
  }

  @Get("lesson/find-all")
  @ApiOperation({ summary: "Get all book lessons paginated" })
  @ApiOkResponse({ type: BookLessonListDto })
  findAllBookLessons(@Query() filters: BookLessonListFiltersDto) {
    return this.bookService.findAllBookLessons(filters);
  }

  @Get("lesson/find-one/:id")
  @ApiOperation({ summary: "Get a book lesson by ID" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookLessonResultDto })
  findOneBookLesson(@Param("id") id: string) {
    return this.bookService.findOneBookLesson(+id);
  }

  @Post("lesson/create")
  @ApiOperation({ summary: "Create a book lesson" })
  @ApiOkResponse({ type: BookLessonResultDto })
  createBookLesson(@Body() dto: BookLessonCreateDto) {
    return this.bookService.createBookLesson(dto);
  }

  @Patch("lesson/update/:id")
  @ApiOperation({ summary: "Update a book lesson" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookLessonResultDto })
  updateBookLesson(@Param("id") id: string, @Body() dto: BookLessonUpdateDto) {
    return this.bookService.updateBookLesson(+id, dto);
  }

  @Delete("lesson/delete/:id")
  @ApiOperation({ summary: "Soft delete a book lesson" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookLessonResultDto })
  deleteBookLesson(@Param("id") id: string) {
    return this.bookService.deleteBookLesson(+id);
  }

  @Get("panel/find-all")
  @ApiOperation({ summary: "Get all book panels paginated" })
  @ApiOkResponse({ type: BookPanelListDto })
  findAllBookPanels(@Query() filters: BookPanelListFiltersDto) {
    return this.bookService.findAllBookPanels(filters);
  }

  @Get("panel/find-one/:id")
  @ApiOperation({ summary: "Get a book panel by ID" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookPanelResultDto })
  findOneBookPanel(@Param("id") id: string) {
    return this.bookService.findOneBookPanel(+id);
  }

  @Post("panel/create")
  @ApiOperation({ summary: "Create a book panel" })
  @ApiOkResponse({ type: BookPanelResultDto })
  createBookPanel(@Body() dto: BookPanelCreateDto) {
    return this.bookService.createBookPanel(dto);
  }

  @Patch("panel/update/:id")
  @ApiOperation({ summary: "Update a book panel" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookPanelResultDto })
  updateBookPanel(@Param("id") id: string, @Body() dto: BookPanelUpdateDto) {
    return this.bookService.updateBookPanel(+id, dto);
  }

  @Delete("panel/delete/:id")
  @ApiOperation({ summary: "Soft delete a book panel" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookPanelResultDto })
  deleteBookPanel(@Param("id") id: string) {
    return this.bookService.deleteBookPanel(+id);
  }

  @Get("audio/find-all")
  @ApiOperation({ summary: "Get all book audios paginated" })
  @ApiOkResponse({ type: BookAudioListDto })
  findAllBookAudios(@Query() filters: BookAudioListFiltersDto) {
    return this.bookService.findAllBookAudios(filters);
  }

  @Get("audio/find-one/:id")
  @ApiOperation({ summary: "Get a book audio by ID" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookAudioResultDto })
  findOneBookAudio(@Param("id") id: string) {
    return this.bookService.findOneBookAudio(+id);
  }

  @Post("audio/create")
  @ApiOperation({ summary: "Create a book audio" })
  @ApiOkResponse({ type: BookAudioResultDto })
  createBookAudio(@Body() dto: BookAudioCreateDto) {
    return this.bookService.createBookAudio(dto);
  }

  @Patch("audio/update/:id")
  @ApiOperation({ summary: "Update a book audio" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookAudioResultDto })
  updateBookAudio(@Param("id") id: string, @Body() dto: BookAudioUpdateDto) {
    return this.bookService.updateBookAudio(+id, dto);
  }

  @Delete("audio/delete/:id")
  @ApiOperation({ summary: "Soft delete a book audio" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookAudioResultDto })
  deleteBookAudio(@Param("id") id: string) {
    return this.bookService.deleteBookAudio(+id);
  }

  @Get("image/find-all")
  @ApiOperation({ summary: "Get all book images paginated" })
  @ApiOkResponse({ type: BookImageListDto })
  findAllBookImages(@Query() filters: BookImageListFiltersDto) {
    return this.bookService.findAllBookImages(filters);
  }

  @Get("image/find-one/:id")
  @ApiOperation({ summary: "Get a book image by ID" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookImageResultDto })
  findOneBookImage(@Param("id") id: string) {
    return this.bookService.findOneBookImage(+id);
  }

  @Post("image/create")
  @ApiOperation({ summary: "Create a book image" })
  @ApiOkResponse({ type: BookImageResultDto })
  createBookImage(@Body() dto: BookImageCreateDto) {
    return this.bookService.createBookImage(dto);
  }

  @Patch("image/update/:id")
  @ApiOperation({ summary: "Update a book image" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookImageResultDto })
  updateBookImage(@Param("id") id: string, @Body() dto: BookImageUpdateDto) {
    return this.bookService.updateBookImage(+id, dto);
  }

  @Delete("image/delete/:id")
  @ApiOperation({ summary: "Soft delete a book image" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: BookImageResultDto })
  deleteBookImage(@Param("id") id: string) {
    return this.bookService.deleteBookImage(+id);
  }
}
