import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const generations = pgTable("generations", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // 'poetry', 'crafts', 'music'
  prompt: text("prompt").notNull(),
  response: text("response").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertGenerationSchema = createInsertSchema(generations).pick({
  type: true,
  prompt: true,
  response: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertGeneration = z.infer<typeof insertGenerationSchema>;
export type Generation = typeof generations.$inferSelect;
