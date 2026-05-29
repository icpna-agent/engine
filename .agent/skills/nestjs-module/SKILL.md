---
name: nestjs-module
description: |
  Guia para crear modulos, services y controllers en erixcel-engine. Usar para
  CRUDs, endpoints REST, inyeccion de dependencias y logica de aplicacion del
  dominio ICPNA Books.
---

# NestJS Module Architecture

Un modulo de dominio se compone de:

1. Service: logica de negocio.
2. Controller: rutas HTTP y Swagger.
3. Module: wiring de inyeccion de dependencias.
4. DTOs: entrada, filtros y respuestas.
5. Repository: acceso a datos, registrado como provider.

## Service Pattern

Ejemplo: `book.service.ts`

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from '@repositories/book.repository';
import { BookCreateDto } from './dto/book-create.dto';
import { BookListFiltersDto } from './dto/book-list.dto';
import { BookUpdateDto } from './dto/book-update.dto';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async findAllPaginated(filters: BookListFiltersDto) {
    const { page = 1, limit = 10, ...rest } = filters;
    const { data, total } = await this.bookRepository.findAllPaginated(page, limit, rest);

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

  async findOne(id: number) {
    const book = await this.bookRepository.findOne(id);
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  create(dto: BookCreateDto) {
    return this.bookRepository.create(dto);
  }

  async update(id: number, dto: BookUpdateDto) {
    await this.findOne(id);
    return this.bookRepository.update(id, dto);
  }

  async delete(id: number) {
    await this.findOne(id);
    return this.bookRepository.delete(id);
  }
}
```

## Controller Pattern

Ejemplo: `book.controller.ts`

```typescript
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { BookService } from './book.service';
import { BookCreateDto } from './dto/book-create.dto';
import { BookListDto, BookListFiltersDto } from './dto/book-list.dto';
import { BookResultDto } from './dto/book-result.dto';
import { BookUpdateDto } from './dto/book-update.dto';

@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('find-all')
  @ApiOperation({ summary: 'Get all books paginated' })
  @ApiOkResponse({ type: BookListDto })
  findAll(@Query() filters: BookListFiltersDto) {
    return this.bookService.findAllPaginated(filters);
  }

  @Get('find-one/:id')
  @ApiOperation({ summary: 'Get a book by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: BookResultDto })
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a book' })
  @ApiOkResponse({ type: BookResultDto })
  create(@Body() dto: BookCreateDto) {
    return this.bookService.create(dto);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Update a book' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: BookResultDto })
  update(@Param('id') id: string, @Body() dto: BookUpdateDto) {
    return this.bookService.update(+id, dto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Soft delete a book' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: BookResultDto })
  remove(@Param('id') id: string) {
    return this.bookService.delete(+id);
  }
}
```

## Module Pattern

Ejemplo: `book.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookRepository } from '@repositories/book.repository';

@Module({
  controllers: [BookController],
  providers: [BookService, BookRepository],
  exports: [BookService],
})
export class BookModule {}
```

## Multiple Entities In One Module

Para el dominio ICPNA se puede agrupar todo bajo un modulo `book` si el usuario quiere administrar el contenido del libro desde una sola API:

```text
src/modules/book/
├── dto/
│   ├── book/
│   ├── book-index/
│   ├── book-unit/
│   ├── book-lesson/
│   ├── book-panel/
│   ├── book-audio/
│   └── book-image/
├── book.controller.ts
├── book.module.ts
└── book.service.ts
```

En ese caso:

- El service puede inyectar varios repositories.
- El controller usa prefijos de ruta:
  - `book/find-all`
  - `book/unit/find-all` o `book/book-unit/find-all` backed by `bookUnit`
  - `book/lesson/find-all` o `book/book-lesson/find-all` backed by `bookLesson`
  - `book/audio/find-all` o `book/book-audio/find-all` backed by `bookAudio`
- Mantener DTOs por entidad para no mezclar schemas.

## Rules

- Controller no contiene logica de negocio.
- Service no importa `database`.
- Repository no conoce DTOs HTTP salvo que sea un tipo estructural compatible y simple.
- Module registra todos los providers necesarios.
- Registrar el modulo nuevo en `src/app.module.ts`.
