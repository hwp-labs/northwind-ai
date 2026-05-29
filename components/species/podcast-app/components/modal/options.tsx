"use client";

import { useRouter } from "next/navigation";
//
import { Button } from "@/components/shadcn/ui/button";
import { OpayWidget } from "../opay-widget";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";

interface Props {
  onClose?: () => void;
}

export const Options = ({ onClose = () => undefined }: Props) => {
  const router = useRouter();

  const handleBecomeGuest = () => {
    onClose();
    window.open(APP.whatsappGroupUrl, "_blank");
  };

  const handleAnalytics = () => {
    onClose();
    router.push(PATH.podcastAnalytics);
  };
  //
  return (
    <div className="grid w-full gap-4 px-4 pb-8">
      <Button variant="secondary" onClick={handleBecomeGuest}>
        Become a Guest
      </Button>
      <OpayWidget variant="toggle" />
      <Button variant="default" onClick={handleAnalytics}>
        View Analytics
      </Button>
    </div>
  );
};
