import { eq, and, isNull } from "drizzle-orm";
import { database } from "@db/connection.db";
import { book } from "@db/tables/book.table";

export async function seedBooks() {
  const title = "American Big Picture";

  const bookData = [
    {
      title,
      author: "Ben Goldstein",
      publisher: "Richmond",
      institution: "ICPNA",
      edition: "Intermediate 5",
      level: "intermediate" as const,
      subLevel: 5,
      language: "english" as const,
      targetProgram: "adults" as const,
      cefrEquivalent: "b1" as const,
      urlPreview: "https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp5b1p_sb/index.html",
      active: true,
    },
    {
      title,
      author: "Ben Goldstein",
      publisher: "Richmond",
      institution: "ICPNA",
      edition: "Intermediate 6",
      level: "intermediate" as const,
      subLevel: 6,
      language: "english" as const,
      targetProgram: "adults" as const,
      cefrEquivalent: "b1" as const,
      urlPreview: "https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp6b1p_sb/index.html",
      active: true,
    },
    {
      title,
      author: "Ben Goldstein",
      publisher: "Richmond",
      institution: "ICPNA",
      edition: "Intermediate 7",
      level: "intermediate" as const,
      subLevel: 7,
      language: "english" as const,
      targetProgram: "adults" as const,
      cefrEquivalent: "b1" as const,
      urlPreview: "https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp7b1p_sb/index.html",
      active: true,
    },
    {
      title,
      author: "Ben Goldstein",
      publisher: "Richmond",
      institution: "ICPNA",
      edition: "Intermediate 8",
      level: "intermediate" as const,
      subLevel: 8,
      language: "english" as const,
      targetProgram: "adults" as const,
      cefrEquivalent: "b1" as const,
      urlPreview: "https://duxebhp63ladi.cloudfront.net/americanbigpicture/flipbook/b1p/abp8b1p_sb/index.html",
      active: true,
    },
  ];

  const seeded = [];
  for (const data of bookData) {
    const existing = await database
      .select()
      .from(book)
      .where(
        and(
          eq(book.title, data.title),
          eq(book.edition, data.edition),
          isNull(book.deletedAt)
        )
      );

    if (existing[0]) {
      // Update existing record with the preview URL
      const updated = await database
        .update(book)
        .set({ urlPreview: data.urlPreview, updatedAt: new Date() })
        .where(eq(book.id, existing[0].id))
        .returning();
      seeded.push(updated[0]);
    } else {
      const inserted = await database.insert(book).values(data).returning();
      seeded.push(inserted[0]);
    }
  }

  console.log("✅ Books seeded");
  return seeded;
}
