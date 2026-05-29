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
      seeded.push(existing[0]);
    } else {
      const inserted = await database.insert(book).values(data).returning();
      seeded.push(inserted[0]);
    }
  }

  console.log("✅ Books seeded");
  return seeded;
}
