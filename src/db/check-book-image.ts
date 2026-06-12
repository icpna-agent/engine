import { database } from '../db/connection.db';
import { bookImage } from '../db/tables/book-image.table';
import { isNull } from 'drizzle-orm';

async function check() {
  const images = await database
    .select()
    .from(bookImage)
    .where(isNull(bookImage.deletedAt));

  console.log(`Found ${images.length} book images:`);
  images.forEach((img, idx) => {
    console.log(`\nImage #${idx + 1}:`);
    console.log(`  ID:`, img.id);
    console.log(`  Book ID:`, img.bookId);
    console.log(`  Book Page:`, img.bookPage);
    console.log(`  URL:`, img.url);
    console.log(`  Meta Media ID:`, img.metaMediaId);
  });
  process.exit(0);
}

check();
