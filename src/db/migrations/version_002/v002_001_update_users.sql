ALTER TABLE "user" ADD COLUMN IF NOT EXISTS "current_book_id" integer REFERENCES "book"("id") ON DELETE SET NULL;
