import { Injectable } from "@nestjs/common";
import { HumanMessage } from "@langchain/core/messages";
import { ClientService } from "src/features/client/client.service";
import { BookPreviewDto } from "./dto/book-preview.dto";
import { BookIndexCreateDto } from "../book/dto/book-index/book-index-create.dto";
import { BookUnitCreateDto } from "../book/dto/book-unit/book-unit-create.dto";
import { BookLessonCreateDto } from "../book/dto/book-lesson/book-lesson-create.dto";
import { BookPanelCreateDto } from "../book/dto/book-panel/book-panel-create.dto";
import { BookAudioCreateDto } from "../book/dto/book-audio/book-audio-create.dto";

// Importación de esquemas Zod
import { bookIndexItemSchema } from "./schema/book-index.schema";
import { bookUnitItemSchema } from "./schema/book-unit.schema";
import { bookLessonItemSchema } from "./schema/book-lesson.schema";
import { bookPanelItemSchema } from "./schema/book-panel.schema";
import { bookAudioItemSchema } from "./schema/book-audio.schema";
import { bookSkillZodEnum } from "./schema/shared.schema";

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

    const parsedJson = await this.generatePreview(dto, prompt);
    const rawInserts = Array.isArray(parsedJson?.inserts) ? parsedJson.inserts : [];

    const validatedItems: BookIndexCreateDto[] = [];

    for (const item of rawInserts) {
      const result = bookIndexItemSchema.safeParse(item);
      if (result.success) {
        validatedItems.push(result.data as BookIndexCreateDto);
      } else {
        console.warn("⚠️ [BookAiService] Validation failed for book_index item, applying fallbacks:", result.error.format());
        const rawSkill = item?.skill;
        const validSkill = (typeof rawSkill === "string" && (bookSkillZodEnum.options as string[]).includes(rawSkill)) ? rawSkill : "speaking";
        validatedItems.push({
          title: typeof item?.title === "string" ? item.title : "Index Item",
          page: typeof item?.page === "string" ? item.page : "1",
          skill: validSkill,
          bookPage: bookPage ?? 0,
          bookId: bookId ?? 0,
        } as BookIndexCreateDto);
      }
    }

    return validatedItems;
  }

  async previewBookUnit(dto: BookPreviewDto): Promise<BookUnitCreateDto[]> {
    const { bookId, bookPage } = dto;
    const prompt = getBookUnitPrompt(bookPage ?? 0, bookId ?? 0);

    const parsedJson = await this.generatePreview(dto, prompt);
    const rawInserts = Array.isArray(parsedJson?.inserts) ? parsedJson.inserts : [];

    const validatedItems: BookUnitCreateDto[] = [];

    for (const item of rawInserts) {
      const result = bookUnitItemSchema.safeParse(item);
      if (result.success) {
        validatedItems.push(result.data as BookUnitCreateDto);
      } else {
        console.warn("⚠️ [BookAiService] Validation failed for book_unit item, applying fallbacks:", result.error.format());
        validatedItems.push({
          number: typeof item?.number === "number" ? item.number : 1,
          title: typeof item?.title === "string" ? item.title : "Unit",
          grammar: Array.isArray(item?.grammar) ? item.grammar : [],
          vocabulary: Array.isArray(item?.vocabulary) ? item.vocabulary : [],
          readingListening: Array.isArray(item?.readingListening) ? item.readingListening : [],
          pronunciation: Array.isArray(item?.pronunciation) ? item.pronunciation : [],
          bookPage: bookPage ?? 0,
          bookId: bookId ?? 0,
        } as BookUnitCreateDto);
      }
    }

    return validatedItems;
  }

  async previewBookLesson(dto: BookPreviewDto): Promise<BookLessonCreateDto[]> {
    const { bookId, bookPage } = dto;
    const prompt = getBookLessonPrompt(bookPage ?? 0, bookId ?? 0);

    const parsedJson = await this.generatePreview(dto, prompt);
    const rawInserts = Array.isArray(parsedJson?.inserts) ? parsedJson.inserts : [];

    const validatedItems: BookLessonCreateDto[] = [];

    for (const item of rawInserts) {
      // Intentar forzar/mapear algunos tipos antes de pasar a Zod
      if (item && typeof item.unitNumber === "string") {
        const parsedNum = parseFloat(item.unitNumber);
        if (!isNaN(parsedNum)) item.unitNumber = parsedNum;
      }
      if (item && typeof item.activityNumber === "string") {
        const parsedNum = parseInt(item.activityNumber, 10);
        if (!isNaN(parsedNum)) item.activityNumber = parsedNum;
      }

      const result = bookLessonItemSchema.safeParse(item);
      if (result.success) {
        validatedItems.push(result.data as BookLessonCreateDto);
      } else {
        console.warn("⚠️ [BookAiService] Validation failed for book_lesson item, applying fallbacks:", result.error.format());
        
        // Deducir valores por defecto de forma segura
        const fallbackUnitNumber = typeof item?.unitNumber === "number" ? item.unitNumber : 1;
        const fallbackTitle = typeof item?.title === "string" ? item.title : `COMMUNICATION`;
        const rawSkill = item?.skill;
        const fallbackSkill = (typeof rawSkill === "string" && (bookSkillZodEnum.options as string[]).includes(rawSkill)) ? rawSkill : "speaking";
        const fallbackTopic = typeof item?.topic === "string" ? item.topic : undefined;
        const fallbackActivityNum = typeof item?.activityNumber === "number" ? item.activityNumber : undefined;
        const fallbackLetterNum = typeof item?.letterNumber === "string" ? item.letterNumber : undefined;
        
        // Si la instrucción vino en topic de forma errónea, y la instrucción real es nula, corregirlo
        let fallbackInstruction = typeof item?.instruction === "string" ? item.instruction : undefined;
        if (!fallbackInstruction && fallbackTopic && fallbackTopic.length > 25) {
          fallbackInstruction = fallbackTopic;
        }
        if (!fallbackInstruction) {
          fallbackInstruction = "Work in pairs.";
        }

        const fallbackContent = typeof item?.content === "string" ? item.content : undefined;

        validatedItems.push({
          unitNumber: fallbackUnitNumber,
          title: fallbackTitle,
          skill: fallbackSkill as any,
          topic: fallbackTopic,
          activityNumber: fallbackActivityNum,
          letterNumber: fallbackLetterNum,
          instruction: fallbackInstruction,
          content: fallbackContent,
          bookPage: bookPage ?? 0,
          bookId: bookId ?? 0,
        } as BookLessonCreateDto);
      }
    }

    return validatedItems;
  }

  async previewBookPanel(dto: BookPreviewDto): Promise<BookPanelCreateDto[]> {
    const { bookId, bookPage } = dto;
    const prompt = getBookPanelPrompt(bookPage ?? 0, bookId ?? 0);

    const parsedJson = await this.generatePreview(dto, prompt);
    const rawInserts = Array.isArray(parsedJson?.inserts) ? parsedJson.inserts : [];

    const validatedItems: BookPanelCreateDto[] = [];

    for (const item of rawInserts) {
      const result = bookPanelItemSchema.safeParse(item);
      if (result.success) {
        validatedItems.push(result.data as BookPanelCreateDto);
      } else {
        console.warn("⚠️ [BookAiService] Validation failed for book_panel item, applying fallbacks:", result.error.format());
        
        const fallbackTitle = typeof item?.title === "string" ? item.title : "KEY VOCABULARY";
        const fallbackTheme = typeof item?.theme === "string" ? item.theme : undefined;
        const fallbackSubTheme = typeof item?.subTheme === "string" ? item.subTheme : undefined;
        const fallbackInstruction = typeof item?.instruction === "string" ? item.instruction : undefined;
        const fallbackContent = typeof item?.content === "string" ? item.content : undefined;

        validatedItems.push({
          title: fallbackTitle,
          theme: fallbackTheme,
          subTheme: fallbackSubTheme,
          instruction: fallbackInstruction,
          content: fallbackContent,
          bookPage: bookPage ?? 0,
          bookId: bookId ?? 0,
        } as BookPanelCreateDto);
      }
    }

    return validatedItems;
  }

  async previewBookAudio(dto: BookPreviewDto): Promise<BookAudioCreateDto[]> {
    const { bookId, bookPage } = dto;
    const prompt = getBookAudioPrompt(bookPage ?? 0, bookId ?? 0);

    const parsedJson = await this.generatePreview(dto, prompt);
    const rawInserts = Array.isArray(parsedJson?.inserts) ? parsedJson.inserts : [];

    const validatedItems: BookAudioCreateDto[] = [];

    for (const item of rawInserts) {
      const result = bookAudioItemSchema.safeParse(item);
      if (result.success) {
        validatedItems.push(result.data as BookAudioCreateDto);
      } else {
        console.warn("⚠️ [BookAiService] Validation failed for book_audio item, applying fallbacks:", result.error.format());
        validatedItems.push({
          url: typeof item?.url === "string" ? item.url : "https://example.com/placeholder-audio.mp3",
          audioIndex: typeof item?.audioIndex === "string" ? item.audioIndex : "1.1",
          transcription: typeof item?.transcription === "string" ? item.transcription : ".",
          bookPage: bookPage ?? 0,
          bookId: bookId ?? 0,
        } as BookAudioCreateDto);
      }
    }

    return validatedItems;
  }

  private async generatePreview(
    dto: BookPreviewDto,
    prompt: string,
  ): Promise<any> {
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
      console.log(`🤖 [BookAiService] Sending LLM text request (invoke)...`);
      const startTime = Date.now();
      const response = await llm.invoke([message]);
      const duration = ((Date.now() - startTime) / 1000).toFixed(2);
      
      const rawText = typeof response.content === "string" ? response.content : String(response.content);
      console.log(`🤖 [BookAiService] LLM invoke success in ${duration}s. Raw response content length: ${rawText.length} chars.`);

      // Extraer y parsear JSON de forma robusta
      const cleanJsonText = this.cleanMarkdownJson(rawText);
      const parsedObj = JSON.parse(cleanJsonText);
      return parsedObj;
    } catch (error) {
      console.error("❌ [BookAiService] Error in Gemini unstructured invocation or JSON parsing:", error);
      // Retornar estructura de inserts vacía para evitar que la app explote
      return { inserts: [] };
    }
  }

  private cleanMarkdownJson(text: string): string {
    // 1. Intentar buscar bloque ```json ... ```
    const jsonBlockRegex = /```json\s*([\s\S]*?)\s*```/;
    const match = text.match(jsonBlockRegex);
    if (match) {
      console.log("🤖 [BookAiService] Extracted JSON using ```json block");
      return match[1].trim();
    }

    // 2. Intentar buscar cualquier bloque ``` ... ```
    const genericBlockRegex = /```\s*([\s\S]*?)\s*```/;
    const genericMatch = text.match(genericBlockRegex);
    if (genericMatch) {
      console.log("🤖 [BookAiService] Extracted JSON using generic markdown block");
      return genericMatch[1].trim();
    }

    // 3. Buscar del primer '{' al último '}'
    const firstBrace = text.indexOf("{");
    const lastBrace = text.lastIndexOf("}");
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      console.log("🤖 [BookAiService] Extracted JSON matching first { and last }");
      return text.substring(firstBrace, lastBrace + 1).trim();
    }

    // 4. Si todo lo anterior falla, devolver el texto original recortado
    return text.trim();
  }
}
