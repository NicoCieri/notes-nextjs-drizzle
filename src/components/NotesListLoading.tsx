import NoteCard from "./NoteCard";

const NotesListLoading = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <NoteCard isLoading />
      <NoteCard isLoading />
      <NoteCard isLoading />
      <NoteCard isLoading />
      <NoteCard isLoading />
    </div>
  );
};

export default NotesListLoading;
