import { Injectable } from "@nestjs/common";
import { z } from "zod";
import { HumanMessage } from "@langchain/core/messages";
import { ClientService } from "src/features/client/client.service";
import { BookPreviewDto } from "./dto/book-preview.dto";
import { BookIndexCreateDto } from "../book/dto/book-index/book-index-create.dto";
import { BookUnitCreateDto } from "../book/dto/book-unit/book-unit-create.dto";
import { BookLessonCreateDto } from "../book/dto/book-lesson/book-lesson-create.dto";
import { BookPanelCreateDto } from "../book/dto/book-panel/book-panel-create.dto";
import { BookAudioCreateDto } from "../book/dto/book-audio/book-audio-create.dto";

// Importación de esquemas Zod
import { bookIndexResponseSchema, BookIndexResponseType } from "./schema/book-index.schema";
import { bookUnitResponseSchema, BookUnitResponseType } from "./schema/book-unit.schema";
import { bookLessonResponseSchema, BookLessonResponseType } from "./schema/book-lesson.schema";
import { bookPanelResponseSchema, BookPanelResponseType } from "./schema/book-panel.schema";
import { bookAudioResponseSchema, BookAudioResponseType } from "./schema/book-audio.schema";

// Importación de prompts de IA
import { getBookIndexPrompt } from "./prompt/book-index.prompt";
import { getBookUnitPrompt } from "./prompt/book-unit.prompt";
import { getBookLessonPrompt } from "./prompt/book-lesson.prompt";
import { getBookPanelPrompt } from "./prompt/book-panel.prompt";
import { getBookAudioPrompt } from "./prompt/book-audio.prompt";

@Injectable()
export class BookAiService {
  constructor(private readonly clientService: ClientService) {}

  async previewBookIndex(dto: BookPreviewDto): Promise<BookIndexCreateDto[]> {
    const { bookId, bookPage } = dto;
    const prompt = getBookIndexPrompt(bookPage ?? 0, bookId ?? 0);

    const result = await this.generatePreview<BookIndexResponseType>(
      dto,
      prompt,
      bookIndexResponseSchema,
    );
    return result.inserts as BookIndexCreateDto[];
  }

  async previewBookUnit(dto: BookPreviewDto): Promise<BookUnitCreateDto[]> {
    const { bookId, bookPage } = dto;
    const prompt = getBookUnitPrompt(bookPage ?? 0, bookId ?? 0);

    const result = await this.generatePreview<BookUnitResponseType>(
      dto,
      prompt,
      bookUnitResponseSchema,
    );
    return result.inserts as BookUnitCreateDto[];
  }

  async previewBookLesson(dto: BookPreviewDto): Promise<BookLessonCreateDto[]> {
    const { bookId, bookPage } = dto;
    const prompt = getBookLessonPrompt(bookPage ?? 0, bookId ?? 0);

    const result = await this.generatePreview<BookLessonResponseType>(
      dto,
      prompt,
      bookLessonResponseSchema,
    );
    return result.inserts as BookLessonCreateDto[];
  }

  async previewBookPanel(dto: BookPreviewDto): Promise<BookPanelCreateDto[]> {
    const { bookId, bookPage } = dto;
    const prompt = getBookPanelPrompt(bookPage ?? 0, bookId ?? 0);

    const result = await this.generatePreview<BookPanelResponseType>(
      dto,
      prompt,
      bookPanelResponseSchema,
    );
    return result.inserts as BookPanelCreateDto[];
  }

  async previewBookAudio(dto: BookPreviewDto): Promise<BookAudioCreateDto[]> {
    const { bookId, bookPage } = dto;
    const prompt = getBookAudioPrompt(bookPage ?? 0, bookId ?? 0);

    const result = await this.generatePreview<BookAudioResponseType>(
      dto,
      prompt,
      bookAudioResponseSchema,
    );
    return result.inserts as BookAudioCreateDto[];
  }

  private async generatePreview<T>(
    dto: BookPreviewDto,
    prompt: string,
    schema: z.ZodType<T>,
  ): Promise<T> {
    const { image, bookPage, bookId } = dto;
    console.log(`🤖 [BookAiService] generatePreview called for bookId: ${bookId}, bookPage: ${bookPage}`);
    console.log(`🤖 [BookAiService] Prompt length: ${prompt.length} chars. Image base64 length: ${image.length} chars.`);

    let base64Data = image;
    let mimeType = "image/jpeg";

    if (image.startsWith("data:")) {
      const match = image.match(/^data:([^;]+);base64,(.+)$/);
      if (match) {
        mimeType = match[1];
        base64Data = match[2];
      }
    }

    console.log(`🤖 [BookAiService] Getting ChatGeminiAI LLM instance...`);
    const llm = this.clientService.getChatGeminiAI();
    console.log(`🤖 [BookAiService] Applying structured output schema...`);
    const structuredLlm = llm.withStructuredOutput(schema);

    const message = new HumanMessage({
      content: [
        {
          type: "text",
          text: prompt,
        },
        {
          type: "image_url",
          image_url: `data:${mimeType};base64,${base64Data}`,
        },
      ],
    });

    try {
      console.log(`🤖 [BookAiService] Sending structuredLlm.invoke request...`);
      const startTime = Date.now();
      const response = await structuredLlm.invoke([message]);
      const duration = ((Date.now() - startTime) / 1000).toFixed(2);
      console.log(`🤖 [BookAiService] structuredLlm.invoke success in ${duration}s. Response parsed successfully.`);
      return response as T;
    } catch (error) {
      console.error("❌ [BookAiService] Error in Gemini structured invocation:", error);
      throw error;
    }
  }
}
