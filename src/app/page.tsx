import { Suspense } from "react";
import NewNoteForm from "@/components/NewNoteForm";
import NoteCard from "@/components/NoteCard";
import NotesList from "@/components/NotesList";
import NotesListLoading from "@/components/NotesListLoading";

export default async function Home() {
  return (
    <div
      className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3"
      style={{ maxHeight: "calc(100vh - 57px)" }}
    >
      <div className=" hidden flex-col items-start gap-8 md:flex sticky top-0">
        <NewNoteForm />
      </div>

      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-stone-100 p-4 lg:col-span-2 overflow-scroll">
        <Suspense fallback={<NotesListLoading />}>
          <NotesList />
        </Suspense>
      </div>
    </div>
  );
}
