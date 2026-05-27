"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  IconClipboard,
  IconClipboardCheck,
  IconHeartFilled,
  IconRocket,
} from "@tabler/icons-react";
//
import { Button } from "@/components/shadcn/ui/button";
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
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyContent,
} from "@/components/shadcn/ui/empty";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { usePodcastStore } from "@/store/podcastStore";
import { sleep } from "@/utils";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";
import { COPY } from "@/constants/LOCALE";
import { Options } from "./options";
import { RsvpFormWidget } from "@/features/podcasts/components/rsvp-form-widget";
import { RsvpForm } from "./rsvp-form";
//

export const Modal = () => {
  const router = useRouter();
  const isMobile = useIsMobile();

  const modal = usePodcastStore((s) => s.modal);
  const mutateModal = usePodcastStore((s) => s.mutateModal);

  const onClose = () => mutateModal({ open: false });

  const renderModalContent = (
    <Empty className="debug_ p-0">
      <EmptyContent className="debug2_">
        {modal.variant === "rsvp" ? (
          <RsvpForm onClose={onClose}/>
        ) : (
          <Options onClose={onClose} />
        )}
      </EmptyContent>
    </Empty>
  );
  //
  return isMobile ? (
    <Drawer open={modal.open} onOpenChange={onClose}>
      <DrawerContent className="rounded-t-4xl">
        <DrawerHeader>
          <DrawerTitle className="sr-only">Success</DrawerTitle>
        </DrawerHeader>
        {renderModalContent}
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={modal.open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm p-0">
        <DialogHeader>
          <DialogTitle className="sr-only">Success</DialogTitle>
        </DialogHeader>
        {renderModalContent}
      </DialogContent>
    </Dialog>
  );
};
