"use client";

import { useEffect } from "react";
//
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
import { Preview } from "./preview";
import { RsvpForm } from "./rsvp-form";
import { UnsubForm } from "./unsub-form";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useQueryParams } from "@/hooks/use-query-params";
import { usePodcastStore } from "@/store/podcastStore";

export const Modal = () => {
  const isMobile = useIsMobile();
  const { get, remove } = useQueryParams();

  const modal = usePodcastStore((s) => s.modal);
  const mutateModal = usePodcastStore((s) => s.mutateModal);
  const resetModal = usePodcastStore((s) => s.resetModal);

  useEffect(() => {
    const q = get({ unsub: "false" });
    if (q.unsub === "true") {
      mutateModal({ open: true, variant: "unsub" });
    }
  }, []);

  const render = (
    <>
      {modal.variant === "unsub" ? (
        <UnsubForm
          onClose={() => {
            resetModal();
            remove("unsub");
          }}
        />
      ) : modal.variant === "rsvp" ? (
        <RsvpForm onClose={resetModal} />
      ) : modal.variant === "preview" ? (
        <Preview onClose={resetModal} />
      ) : (
        <Options onClose={resetModal} />
      )}
    </>
  );
  //
  return isMobile ? (
    <Drawer open={modal.open} onOpenChange={() => resetModal()}>
      <DrawerContent className="rounded-t-4xl px-4">
        <DrawerHeader>
          <DrawerTitle className="sr-only">Success</DrawerTitle>
        </DrawerHeader>
        {render}
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={modal.open} onOpenChange={() => resetModal()}>
      <DialogContent className="max-w-sm pb-0">
        <DialogHeader>
          <DialogTitle className="sr-only">Success</DialogTitle>
        </DialogHeader>
        {render}
      </DialogContent>
    </Dialog>
  );
};
