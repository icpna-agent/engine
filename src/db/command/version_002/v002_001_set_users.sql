-- Actualizar a todos los usuarios con current_book_id = 1
UPDATE "user"
SET "current_book_id" = 1
WHERE "deleted_at" IS NULL;

-- Verificar
SELECT id, phone, current_book_id
FROM "user"
WHERE "deleted_at" IS NULL;
