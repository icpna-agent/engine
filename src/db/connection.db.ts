import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { dbConfig } from "@db/config.db";

import { bot } from "@db/tables/bot.table";
import { instance } from "@db/tables/instance.table";
import { user } from "@db/tables/user.table";
import { chat } from "@db/tables/chat.table";
import { message } from "@db/tables/message.table";
import { book } from "@db/tables/book.table";
import { bookIndex } from "@db/tables/book-index.table";
import { bookUnit } from "@db/tables/book-unit.table";
import { bookLesson } from "@db/tables/book-lesson.table";
import { bookPanel } from "@db/tables/book-panel.table";
import { bookAudio } from "@db/tables/book-audio.table";
import { bookImage } from "@db/tables/book-image.table";

const pool = new Pool(dbConfig);

const schema = {
  bot,
  instance,
  user,
  chat,
  message,
  book,
  bookIndex,
  bookUnit,
  bookLesson,
  bookPanel,
  bookAudio,
  bookImage,
};

export const database = drizzle(pool, { schema });
