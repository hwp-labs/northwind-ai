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
//

export const Modal = () => {
  const router = useRouter();
  const isMobile = useIsMobile();

  const modal = usePodcastStore((s) => s.modal);
  const mutateModal = usePodcastStore((s) => s.mutateModal);
  const [showOPay, setShowOPay] = useState(false);
  const [copying, setCopying] = useState(false);

  const onClose = () => mutateModal({ open: false });

  const handleCopy = async () => {
    setCopying(true);
    await navigator.clipboard.writeText(APP.telOPayRaw);
    await sleep(1);
    setCopying(false);

    setShowOPay((s) => !s);
  };

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
        <Button
          variant="secondary"
          onClick={() => {
            onClose();
            window.open(APP.whatsappGroupUrl, "_blank");
          }}
        >
          Become a Guest
        </Button>
        {showOPay ? (
          <Button onClick={handleCopy} className="bg-[#1dcf9f]! text-[#200f5f]">
            {copying ? (
              <>
                <IconClipboardCheck strokeWidth={2.5} />
                Copied!
              </>
            ) : (
              <>
                <IconHeartFilled color="var(--destructive)" />
                <strong>
                  OPay #<b>{APP.telOPayRaw}</b>
                </strong>
              </>
            )}
          </Button>
        ) : (
          <Button variant="secondary" onClick={() => setShowOPay((s) => !s)}>
            Support {APP.name}
          </Button>
        )}
        <Button
          variant="default"
          onClick={() => {
            onClose();
            router.push(PATH.podcastAnalytics);
          }}
        >
          View Analytics
        </Button>
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
