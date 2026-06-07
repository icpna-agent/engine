import { Injectable } from "@nestjs/common";
import { z } from "zod";
import { HumanMessage } from "@langchain/core/messages";
import { ClientService } from "src/features/client/client.service";
import { BookPreviewDto } from "./dto/book-preview.dto";
import { BookIndexCreateDto } from "../book/dto/book-index/book-index-create.dto";
import { BookUnitCreateDto } from "../book/dto/book-unit/book-unit-create.dto";
import { BookLessonCreateDto } from "../book/dto/book-lesson/book-lesson-create.dto";
import { BookPanelCreateDto } from "../book/dto/book-panel/book-panel-create.dto";

// Importación de esquemas Zod
import { bookIndexResponseSchema, BookIndexResponseType } from "./schema/book-index.schema";
import { bookUnitResponseSchema, BookUnitResponseType } from "./schema/book-unit.schema";
import { bookLessonResponseSchema, BookLessonResponseType } from "./schema/book-lesson.schema";
import { bookPanelResponseSchema, BookPanelResponseType } from "./schema/book-panel.schema";

// Importación de prompts de IA
import { getBookIndexPrompt } from "./prompt/book-index.prompt";
import { getBookUnitPrompt } from "./prompt/book-unit.prompt";
import { getBookLessonPrompt } from "./prompt/book-lesson.prompt";
import { getBookPanelPrompt } from "./prompt/book-panel.prompt";

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

  private async generatePreview<T>(
    dto: BookPreviewDto,
    prompt: string,
    schema: z.ZodType<T>,
  ): Promise<T> {
    const { image } = dto;
    let base64Data = image;
    let mimeType = "image/jpeg";

    if (image.startsWith("data:")) {
      const match = image.match(/^data:([^;]+);base64,(.+)$/);
      if (match) {
        mimeType = match[1];
        base64Data = match[2];
      }
    }

    const llm = this.clientService.getChatGeminiAI();
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
      const response = await structuredLlm.invoke([message]);
      return response as T;
    } catch (error) {
      console.error("Error in Gemini structured invocation in BookAiService:", error);
      throw error;
    }
  }
}
