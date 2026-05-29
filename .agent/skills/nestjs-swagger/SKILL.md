---
name: nestjs-swagger
description: |
  Guia para Swagger, OpenAPI y ValidationPipe en erixcel-engine. Usar para
  documentar controllers, configurar setupSwagger/setupTransformer y mantener
  responses tipadas.
---

# Swagger & Validation - Erixcel Engine

El proyecto ya tiene configuracion global en:

```text
src/core/swagger.core.ts
src/core/transformer.core.ts
src/main.ts
```

## Swagger Core

Mantener la configuracion en `src/core/swagger.core.ts`:

```typescript
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Erixcel Engine API')
    .setDescription('API endpoints for ICPNA Studio, WhatsApp flows and AI agents')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
```

## Validation Pipe

Mantener `src/core/transformer.core.ts`:

```typescript
import { INestApplication, ValidationPipe } from '@nestjs/common';

export function setupTransformer(app: INestApplication) {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      whitelist: true,
    }),
  );
}
```

## Controller Rules

Todo controller HTTP nuevo debe incluir:

- `@ApiTags('module-name')`
- `@ApiOperation({ summary: '...' })`
- `@ApiOkResponse({ type: ResultDto })` o `@ApiResponse({ status: 200, type: ResultDto })`
- `@ApiParam()` para params relevantes
- `@ApiBody()` solo cuando el body no pueda inferirse bien desde DTO
- `@ApiBearerAuth()` si el endpoint requiere autenticacion

Ejemplo:

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

## Swagger DTO Rules

- Arrays: `@ApiProperty({ type: [ItemDto] })`.
- Nullable fields: `@ApiPropertyOptional({ nullable: true })`.
- Enums: `@ApiProperty({ enum: enumName.enumValues })`.
- No documentar responses con `Object`, `Array` o `any`.
