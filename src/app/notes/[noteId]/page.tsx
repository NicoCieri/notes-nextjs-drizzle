import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getNote } from "@/lib/db/notes";

interface NotePageProps {
  params: {
    noteId: string;
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const note = await getNote(Number(params.noteId));

  return (
    <div className="container mx-auto py-4">
      <Card className="max-w-screen-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{note.title}</CardTitle>
          {note.created_at && (
            <time
              className="text-sm text-gray-500"
              dateTime={new Date(note.created_at).toLocaleDateString()}
            >
              {new Date(note.created_at).toLocaleDateString()}
            </time>
          )}
        </CardHeader>
        <CardContent>{note.body}</CardContent>
      </Card>
    </div>
  );
}
