"use client";

import { IconRocket } from "@tabler/icons-react";
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
import { usePodcastSearchbarStore } from "@/store/podcastSearchbarStore";
import { COPY } from "@/constants/LOCALE";
import { APP } from "@/constants/APP";
import Link from "next/link";
import { PATH } from "@/constants/PATH";
//

export const Footer = () => {
  const open = usePodcastSearchbarStore((s) => s.show);
  const onClose = usePodcastSearchbarStore((s) => s.setShow);

  const isMobile = useIsMobile();

  const renderModalContent = (
    <Empty className="mt-4_">
      <EmptyHeader className="hidden">
        <EmptyMedia variant="icon" className="bg-brand mb-4">
          <IconRocket />
        </EmptyMedia>
        <EmptyTitle>{COPY.email.welcome}</EmptyTitle>
        <EmptyDescription className="_border text-muted-foreground w-[340px]">
          {COPY.promptWithCool}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="grid px-2">
        <Button variant="secondary" onClick={() => onClose()}>
          Become a Guest
        </Button>
        <Button variant="secondary" onClick={() => onClose()}>
          Join WhatsApp Community
        </Button>
        <Button variant="secondary" onClick={() => onClose()}>
          Support {APP.name}{" "}
        </Button>
        <div className="flex-row-cc mt-2 gap-6">
          <Link href={PATH.podcastAnalytics} className="underline_">
            View Analytics
          </Link>
        </div>
      </EmptyContent>
    </Empty>
  );
  //
  return isMobile ? (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="rounded-t-4xl">
        <DrawerHeader>
          <DrawerTitle className="sr-only">Success</DrawerTitle>
        </DrawerHeader>
        {renderModalContent}
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm p-0">
        <DialogHeader>
          <DialogTitle className="sr-only">Success</DialogTitle>
        </DialogHeader>
        {renderModalContent}
      </DialogContent>
    </Dialog>
  );
};
