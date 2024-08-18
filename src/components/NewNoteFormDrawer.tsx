"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import NewNoteForm from "./NewNoteForm";
import { usePathname } from "next/navigation";

const NewNoteFormDrawer = () => {
  const path = usePathname();
  const [isOpen, setOpen] = useState(false);
  const isHome = path === "/";

  return isHome ? (
    <Drawer open={isOpen} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="md:hidden" size="sm" onClick={() => setOpen(true)}>
          <Pencil className="size-4 mr-2" />
          <span>New note</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>Create new note</DrawerTitle>
        </DrawerHeader>
        <NewNoteForm hideBorder hideLegend />
      </DrawerContent>
    </Drawer>
  ) : null;
};

export default NewNoteFormDrawer;
