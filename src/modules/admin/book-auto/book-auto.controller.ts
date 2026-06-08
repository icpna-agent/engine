import { Controller, Get, Post, Body, Sse, Query, UseGuards, MessageEvent } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { BookAutoService } from "./book-auto.service";
import { BookCaptureDto } from "./dto/book-capture.dto";
import { BookCaptureEventDto } from "./dto/book-capture-event.dto";
import { InsertIaDto } from "./dto/insert-ia.dto";

@ApiTags("book-auto")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller("admin/book-auto")
export class BookAutoController {
  constructor(private readonly bookAutoService: BookAutoService) {}

  @Sse("american-big-picture")
  @ApiOperation({ summary: "Capture flipbook pages as JPG screenshots using Playwright and stream via SSE" })
  @ApiOkResponse({ type: BookCaptureEventDto, description: "Stream de eventos conteniendo metadatos y capturas de páginas en base64" })
  captureAmericanBigPicture(@Query() dto: BookCaptureDto): Observable<BookCaptureEventDto> {
    return this.bookAutoService.captureBookPages(dto);
  }

  @Post("insert-ia")
  @Sse("insert-ia")
  @ApiOperation({ summary: "Sube imagen de la página, la registra, e identifica/guarda elementos mediante IA streaming de progreso SSE" })
  @ApiOkResponse({ description: "Stream de eventos de progreso en el registro" })
  insertIa(@Body() dto: InsertIaDto): Observable<MessageEvent> {
    return this.bookAutoService.insertIa(dto);
  }
}
