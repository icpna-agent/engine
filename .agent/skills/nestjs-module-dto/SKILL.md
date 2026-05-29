---
name: nestjs-module-dto
description: |
  Guia para crear DTOs con class-validator, class-transformer y Swagger en
  erixcel-engine. Usar para CreateDto, UpdateDto, ListDto, ResultDto,
  filtros, paginacion y responses tipadas del dominio ICPNA Books.
---

# NestJS DTO Architecture

Los DTOs deben validar entrada, documentar Swagger y mantener compatibilidad con los tipos Drizzle.

## Reglas Generales

- Cada objeto de respuesta debe ser una clase DTO.
- No usar tipos inline en controllers.
- Usar `@ApiProperty()` o `@ApiPropertyOptional()` en cada campo.
- Usar `PartialType` desde `@nestjs/swagger`.
- Para enums, importar el enum desde `@db/tables/*.table`.
- En query params numericos, usar `@Type(() => Number)`.

## Create DTO

Ejemplo: `src/modules/book/dto/book-create.dto.ts`

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import {
  bookCefrEquivalentEnum,
  bookLanguageEnum,
  bookLevelEnum,
  bookTargetProgramEnum,
  type BookDTO,
} from '@db/tables/book.table';

export class BookCreateDto implements Omit<BookDTO, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'> {
  @ApiProperty({ example: 'ICPNA Studio Book 1' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ example: 'ICPNA' })
  @IsString()
  @IsOptional()
  author?: string;

  @ApiPropertyOptional({ example: 'ICPNA' })
  @IsString()
  @IsOptional()
  publisher?: string;

  @ApiProperty({ example: 'ICPNA', default: 'ICPNA' })
  @IsString()
  @IsNotEmpty()
  institution: string;

  @ApiPropertyOptional({ example: '2026 Edition' })
  @IsString()
  @IsOptional()
  edition?: string;

  @ApiProperty({ enum: bookLevelEnum.enumValues })
  @IsEnum(bookLevelEnum.enumValues)
  @IsNotEmpty()
  level: (typeof bookLevelEnum.enumValues)[number];

  @ApiPropertyOptional({ example: 1 })
  @IsNumber()
  @IsOptional()
  subLevel?: number;

  @ApiProperty({ enum: bookLanguageEnum.enumValues, default: bookLanguageEnum.enumValues[0] })
  @IsEnum(bookLanguageEnum.enumValues)
  @IsNotEmpty()
  language: (typeof bookLanguageEnum.enumValues)[number];

  @ApiProperty({ enum: bookTargetProgramEnum.enumValues })
  @IsEnum(bookTargetProgramEnum.enumValues)
  @IsNotEmpty()
  targetProgram: (typeof bookTargetProgramEnum.enumValues)[number];

  @ApiPropertyOptional({ enum: bookCefrEquivalentEnum.enumValues })
  @IsEnum(bookCefrEquivalentEnum.enumValues)
  @IsOptional()
  cefrEquivalent?: (typeof bookCefrEquivalentEnum.enumValues)[number];

  @ApiProperty({ default: true })
  @IsBoolean()
  active: boolean;
}
```

## Update DTO

```typescript
import { PartialType } from '@nestjs/swagger';
import { BookCreateDto } from './book-create.dto';

export class BookUpdateDto extends PartialType(BookCreateDto) {}
```

## List DTO

Ejemplo: `src/modules/book/dto/book-list.dto.ts`

```typescript
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { bookLevelEnum, bookTargetProgramEnum } from '@db/tables/book.table';

export class BookListFiltersDto {
  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  page?: number = 1;

  @ApiPropertyOptional({ description: 'Items per page', default: 10 })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  limit?: number = 10;

  @ApiPropertyOptional({ description: 'Search by title, author or edition' })
  @IsString()
  @IsOptional()
  search?: string;

  @ApiPropertyOptional({ enum: bookLevelEnum.enumValues })
  @IsEnum(bookLevelEnum.enumValues)
  @IsOptional()
  level?: (typeof bookLevelEnum.enumValues)[number];

  @ApiPropertyOptional({ enum: bookTargetProgramEnum.enumValues })
  @IsEnum(bookTargetProgramEnum.enumValues)
  @IsOptional()
  targetProgram?: (typeof bookTargetProgramEnum.enumValues)[number];
}

export class BookListItemDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'ICPNA Studio Book 1' })
  title: string;

  @ApiPropertyOptional({ example: 'ICPNA' })
  edition?: string;

  @ApiProperty({ enum: bookLevelEnum.enumValues })
  level: (typeof bookLevelEnum.enumValues)[number];

  @ApiProperty({ enum: bookTargetProgramEnum.enumValues })
  targetProgram: (typeof bookTargetProgramEnum.enumValues)[number];

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  createdAt: Date;
}

export class PaginationMetaDto {
  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  hasNextPage: boolean;

  @ApiProperty()
  hasPreviousPage: boolean;
}

export class BookListDto {
  @ApiProperty({ type: [BookListItemDto] })
  data: BookListItemDto[];

  @ApiProperty({ type: PaginationMetaDto })
  meta: PaginationMetaDto;
}
```

## Result DTO

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  type Book,
  bookCefrEquivalentEnum,
  bookLanguageEnum,
  bookLevelEnum,
  bookTargetProgramEnum,
} from '@db/tables/book.table';

export class BookResultDto implements Book {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiPropertyOptional()
  author: string | null;

  @ApiPropertyOptional()
  publisher: string | null;

  @ApiProperty()
  institution: string;

  @ApiPropertyOptional()
  edition: string | null;

  @ApiProperty({ enum: bookLevelEnum.enumValues })
  level: (typeof bookLevelEnum.enumValues)[number];

  @ApiPropertyOptional()
  subLevel: number | null;

  @ApiProperty({ enum: bookLanguageEnum.enumValues })
  language: (typeof bookLanguageEnum.enumValues)[number];

  @ApiProperty({ enum: bookTargetProgramEnum.enumValues })
  targetProgram: (typeof bookTargetProgramEnum.enumValues)[number];

  @ApiPropertyOptional({ enum: bookCefrEquivalentEnum.enumValues })
  cefrEquivalent: (typeof bookCefrEquivalentEnum.enumValues)[number] | null;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiPropertyOptional({ nullable: true })
  deletedAt: Date | null;
}
```

## Child Entity DTO Notes

Para `bookUnit`, `bookLesson`, `bookPanel`, `bookAudio`, `bookImage` y `bookIndex`:

- Incluir `bookId` en create DTO.
- Usar `@IsNumber()` con `@Type(() => Number)` en filtros por `bookId`.
- Arrays como `grammar`, `vocabulary`, `readingListening`, `pronunciation` usan `@IsArray()` y `@IsString({ each: true })`.
- Campos JSON como `content` pueden tiparse como `Record<string, unknown>` solo si el schema lo define asi.
