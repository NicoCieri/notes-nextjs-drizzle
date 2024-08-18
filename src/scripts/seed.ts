import util from "util";
import { Note, insertNote } from "@/lib/db/notes";

async function main() {
  const note: Note = {
    title: "Hello, world!",
    body: "This is a test note.",
  };

  try {
    const result = await insertNote(note);
    console.log("Insert note success");
    console.log(util.inspect(result, { depth: null, colors: true }));
    process.exit();
  } catch (error) {
    console.error("Failed to insert note:", error);
    process.exit();
  }
}

main();
