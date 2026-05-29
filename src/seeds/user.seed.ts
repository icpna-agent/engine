import { database } from '@db/connection.db';
import { user } from '@db/tables/user.table';
import { inArray } from 'drizzle-orm';

export async function seedUsers() {
  const phones = ['51929073820', '51912345678', '51923456789'];

  await database
    .insert(user)
    .values(phones.map((phone) => ({ phone })))
    .onConflictDoNothing({ target: user.phone });

  const users = await database.select().from(user).where(inArray(user.phone, phones));

  console.log('✅ Users seeded');
  return users;
}
