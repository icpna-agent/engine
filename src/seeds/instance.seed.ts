import { database } from '@db/connection.db';
import { instance } from '@db/tables/instance.table';
import { Bot } from '@db/tables/bot.table';
import { eq } from 'drizzle-orm';

export async function seedInstances(bots: Bot[]) {
  const phoneNumberId = '909519762251702';
  const existing = await database.select().from(instance).where(eq(instance.phone_number_id, phoneNumberId));
  if (existing[0]) {
    console.log('⏭️  Instances seed skipped');
    return existing;
  }

  const instances = await database
    .insert(instance)
    .values([
      {
        bot_id: bots[0].id,
        whatsapp_type: 'business',
        provider_type: 'meta',
        business_id: '1793146138173503',
        phone_number_id: phoneNumberId,
        display_phone_number: '+51987654321',
        waba_id: '1221915833237632',
        token: 'EAAPOLblYhZBsBPUJsLDcSaDtQd8wlW2ZCVOBpiHgXc2EGtKJKm1tiXoNQ7nA7v1bcrwzmOs305kHD3JCUm8av8Qg27hSEw2Ao9Nte7ZA38AXYRdjZB1RzGmd9NE0IwtCp0I8nNdAiMTAnie6FVth3GJ40xj9QV5Nk5FUb6qtK1h8uMr2fX4FqHAT9DPI0wZDZD',
      },
    ])
    .returning();

  console.log('✅ Instances seeded');
  return instances;
}
