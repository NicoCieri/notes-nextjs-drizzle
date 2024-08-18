import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  body: text("body").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
});
