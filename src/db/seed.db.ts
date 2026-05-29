import { seedBots } from '@seeds/bot.seed';
import { seedBooks } from '@seeds/book.seed';
import { seedChats } from '@seeds/chat.seed';
import { seedInstances } from '@seeds/instance.seed';
import { seedMessages } from '@seeds/message.seed';
import { seedUsers } from '@seeds/user.seed';

async function seed() {
  try {
    console.log('🚀 Starting database seeding...\n');

    // Seeds must run in order due to foreign key dependencies
    await seedUsers();
    const botsData = await seedBots();
    await seedBooks();
    await seedInstances(botsData);
    await seedChats();
    await seedMessages();

    console.log('\n✨ Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seed();
