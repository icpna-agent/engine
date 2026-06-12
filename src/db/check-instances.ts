import { database } from '../db/connection.db';
import { instance } from '../db/tables/instance.table';
import { isNull } from 'drizzle-orm';

async function check() {
  const activeInstances = await database
    .select()
    .from(instance)
    .where(isNull(instance.deletedAt));

  console.log(`Found ${activeInstances.length} active instances:`);
  activeInstances.forEach((inst, idx) => {
    console.log(`\nInstance #${idx + 1}:`);
    console.log(`  ID:`, inst.id);
    console.log(`  Display Phone Number:`, inst.display_phone_number);
    console.log(`  Phone Number ID:`, inst.phone_number_id);
    console.log(`  WABA ID:`, inst.waba_id);
    console.log(`  Token starts with:`, inst.token ? inst.token.substring(0, 15) + '...' : 'null');
  });
  process.exit(0);
}

check();
