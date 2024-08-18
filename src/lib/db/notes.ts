import { eq } from "drizzle-orm";
import { db } from ".";
import { notes } from "./schema";

export type Note = typeof notes.$inferInsert;

export const getNotes = async () => {
  const selectResult = await db.query.notes.findMany({
    orderBy: (notes, { desc }) => desc(notes.id),
  });
  return selectResult;
};

export const insertNote = async (note: Note) => {
  return db.insert(notes).values(note).returning();
};

export const getNote = async (id: number) => {
  const [note] = await db.select().from(notes).where(eq(notes.id, id));
  return note;
};
