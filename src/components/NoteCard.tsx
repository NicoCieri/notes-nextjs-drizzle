import { Note } from "@/lib/db/notes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

interface NoteCardProps {
  isLoading?: boolean;
  note?: Note;
}

const NoteCard = ({ note, isLoading = false }: NoteCardProps) => {
  return (
    <>
      {isLoading && (
        <Card>
          <CardHeader>
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          </CardContent>
        </Card>
      )}

      {!isLoading && note && (
        <Link href={`/notes/${note.id}`}>
          <Card>
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
            <CardContent className="">
              <p className="line-clamp-5">{note.body}</p>
            </CardContent>
          </Card>
        </Link>
      )}
    </>
  );
};

export default NoteCard;
