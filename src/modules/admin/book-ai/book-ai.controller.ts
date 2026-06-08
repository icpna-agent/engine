import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { BookAiService } from "./book-ai.service";
import { BookPreviewDto } from "./dto/book-preview.dto";
import { BookIndexCreateDto } from "../book/dto/book-index/book-index-create.dto";
import { BookUnitCreateDto } from "../book/dto/book-unit/book-unit-create.dto";
import { BookLessonCreateDto } from "../book/dto/book-lesson/book-lesson-create.dto";
import { BookPanelCreateDto } from "../book/dto/book-panel/book-panel-create.dto";
import { BookAudioCreateDto } from "../book/dto/book-audio/book-audio-create.dto";

@ApiTags("book-ai")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller("admin/book-ai")
export class BookAiController {
  constructor(private readonly bookAiService: BookAiService) {}

  @Post("preview-book-index")
  @ApiOperation({ summary: "Analiza una imagen de índice de libro y devuelve una lista de posibles inserts para book_index" })
  @ApiOkResponse({ type: [BookIndexCreateDto], description: "Arreglo de posibles inserciones para la tabla book_index" })
  async previewBookIndex(@Body() dto: BookPreviewDto): Promise<BookIndexCreateDto[]> {
    return this.bookAiService.previewBookIndex(dto);
  }

  @Post("preview-book-unit")
  @ApiOperation({ summary: "Analiza una imagen de portada de unidad y devuelve una lista de posibles inserts para book_unit" })
  @ApiOkResponse({ type: [BookUnitCreateDto], description: "Arreglo de posibles inserciones para la tabla book_unit" })
  async previewBookUnit(@Body() dto: BookPreviewDto): Promise<BookUnitCreateDto[]> {
    return this.bookAiService.previewBookUnit(dto);
  }

  @Post("preview-book-lesson")
  @ApiOperation({ summary: "Analiza una imagen de lección/actividad y devuelve una lista de posibles inserts para book_lesson" })
  @ApiOkResponse({ type: [BookLessonCreateDto], description: "Arreglo de posibles inserciones para la tabla book_lesson" })
  async previewBookLesson(@Body() dto: BookPreviewDto): Promise<BookLessonCreateDto[]> {
    return this.bookAiService.previewBookLesson(dto);
  }

  @Post("preview-book-panel")
  @ApiOperation({ summary: "Analiza una imagen de recuadro/panel y devuelve una lista de posibles inserts para book_panel" })
  @ApiOkResponse({ type: [BookPanelCreateDto], description: "Arreglo de posibles inserciones para la tabla book_panel" })
  async previewBookPanel(@Body() dto: BookPreviewDto): Promise<BookPanelCreateDto[]> {
    return this.bookAiService.previewBookPanel(dto);
  }

  @Post("preview-book-audio")
  @ApiOperation({ summary: "Analiza una imagen de página y devuelve una lista de posibles inserts para book_audio" })
  @ApiOkResponse({ type: [BookAudioCreateDto], description: "Arreglo de posibles inserciones para la tabla book_audio" })
  async previewBookAudio(@Body() dto: BookPreviewDto): Promise<BookAudioCreateDto[]> {
    return this.bookAiService.previewBookAudio(dto);
  }
}
