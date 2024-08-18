"use server";

import { z } from "zod";
import { insertNote, Note } from "@/lib/db/notes";
import { revalidatePath } from "next/cache";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Body is required"),
});

export async function createNoteAction(prev: any, formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  const validatedFields = schema.safeParse({
    title: formData.get("title"),
    body: formData.get("body"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const note: Note = {
    title,
    body,
  };

  try {
    await insertNote(note);
    revalidatePath("/");
  } catch (error) {
    return {
      errors: {
        form: "Failed to insert note",
      },
    };
  }
}
