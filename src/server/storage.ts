import { generations, type Generation, type InsertGeneration } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createGeneration(generation: InsertGeneration): Promise<Generation>;
  getGenerationsByType(type: string): Promise<Generation[]>;
}

export class DatabaseStorage implements IStorage {
  async createGeneration(insertGeneration: InsertGeneration): Promise<Generation> {
    const [generation] = await db
      .insert(generations)
      .values(insertGeneration)
      .returning();
    return generation;
  }

  async getGenerationsByType(type: string): Promise<Generation[]> {
    return await db.select().from(generations).where(eq(generations.type, type));
  }
}

export const storage = new DatabaseStorage();
