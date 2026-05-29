import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { database } from '@db/connection.db';
import { instance, type Instance, type InstanceInsert } from '@db/tables/instance.table';

@Injectable()
export class InstanceRepository {
  async findAll(): Promise<Instance[]> {
    return await database.select().from(instance);
  }

  async findById(id: number): Promise<Instance | undefined> {
    const result = await database.select().from(instance).where(eq(instance.id, id));
    return result[0];
  }

  async findByBotId(botId: number): Promise<Instance | undefined> {
    const result = await database.select().from(instance).where(eq(instance.bot_id, botId));
    return result[0];
  }

  async findByPhoneNumberId(phoneNumberId: string): Promise<Instance | undefined> {
    const result = await database.select().from(instance).where(eq(instance.phone_number_id, phoneNumberId));
    return result[0];
  }

  async findByDisplayPhoneNumber(displayPhoneNumber: string): Promise<Instance | undefined> {
    const result = await database.select().from(instance).where(eq(instance.display_phone_number, displayPhoneNumber));
    return result[0];
  }

  async create(data: InstanceInsert): Promise<Instance> {
    const result = await database.insert(instance).values(data).returning();
    return result[0];
  }

  async update(id: number, data: Partial<InstanceInsert>): Promise<Instance | undefined> {
    const result = await database.update(instance).set(data).where(eq(instance.id, id)).returning();
    return result[0];
  }

  async delete(id: number): Promise<void> {
    await database.delete(instance).where(eq(instance.id, id));
  }
}
