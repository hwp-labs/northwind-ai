"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/shadcn/ui/drawer";
import { Options } from "./options";
import { RsvpForm } from "./rsvp-form";
import { Preview } from "./preview";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { usePodcastStore } from "@/store/podcastStore";

export const Modal = () => {
  const isMobile = useIsMobile();

  const modal = usePodcastStore((s) => s.modal);
  const mutateModal = usePodcastStore((s) => s.mutateModal);

  const onClose = () => mutateModal({ open: false });

  const render = (
    <>
      {modal.variant === "rsvp" ? (
        <RsvpForm onClose={onClose} />
      ) : modal.variant === "preview" ? (
        <Preview onClose={onClose} />
      ) : (
        <Options onClose={onClose} />
      )}
    </>
  );
  //
  return isMobile ? (
    <Drawer open={modal.open} onOpenChange={onClose}>
      <DrawerContent className="rounded-t-4xl px-4">
        <DrawerHeader>
          <DrawerTitle className="sr-only">Success</DrawerTitle>
        </DrawerHeader>
        {render}
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={modal.open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm pb-0">
        <DialogHeader>
          <DialogTitle className="sr-only">Success</DialogTitle>
        </DialogHeader>
        {render}
      </DialogContent>
    </Dialog>
  );
};
