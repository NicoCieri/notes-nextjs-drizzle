import { getNotes } from "@/lib/db/notes";
import React from "react";
import NoteCard from "./NoteCard";

const NotesList = async () => {
  const notes = await getNotes();

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
