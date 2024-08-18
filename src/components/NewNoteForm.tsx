"use client";

import React, { useState } from "react";
import { useFormState } from "react-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { createNoteAction } from "@/app/actions";

interface NoteFormProps {
  hideBorder?: boolean;
  hideLegend?: boolean;
}

const initErrors: {
  title?: string[] | undefined;
  body?: string[] | undefined;
} = {
  title: [],
  body: [],
};

const NewNoteForm = ({
  hideBorder = false,
  hideLegend = false,
}: NoteFormProps) => {
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<any>(initErrors);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setErrors(initErrors);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const result = await createNoteAction(null, formData);

    setPending(false);

    if (result?.errors) {
      setErrors(result?.errors || initErrors);
      console.error(result.errors);
    } else {
      form.reset();
    }
  };

  return (
    <form className="grid w-full items-start gap-6" onSubmit={handleSubmit}>
      <fieldset
        className={`grid gap-6 rounded-lg p-4 ${hideBorder ? "" : "border"}`}
      >
        {!hideLegend && (
          <legend className="-ml-1 px-1 text-sm font-medium">
            Create new note
          </legend>
        )}

        <div className="grid gap-3">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" type="text" />
          {errors.title && errors.title.length > 0 && (
            <p className="text-red-500 text-sm">{errors.title[0]}</p>
          )}
        </div>

        <div className="grid gap-3">
          <Label htmlFor="body">Content</Label>
          <Textarea
            id="body"
            name="body"
            placeholder="Type your note content here..."
            className="min-h-[200px] p-3 shadow-none "
          />
          {errors.body && errors.body.length > 0 && (
            <p className="text-red-500 text-sm">{errors.body[0]}</p>
          )}
        </div>

        <Button className="w-full" type="submit" disabled={pending}>
          {pending ? "Creating..." : "Create Note"}
        </Button>
      </fieldset>
    </form>
  );
};

export default NewNoteForm;
