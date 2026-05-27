"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconClipboardCheck, IconHeartFilled } from "@tabler/icons-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { sleep } from "@/utils";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";

interface Props {
  onClose?: () => void;
}

export const Options = ({ onClose = () => undefined }: Props) => {
  const router = useRouter();

  const [showOPay, setShowOPay] = useState(false);
  const [copying, setCopying] = useState(false);

  const handleBecomeGuest = () => {
    onClose();
    window.open(APP.whatsappGroupUrl, "_blank");
  };

  const handleAnalytics = () => {
    onClose();
    router.push(PATH.podcastAnalytics);
  };

  const handleCopy = async () => {
    setCopying(true);

    await navigator.clipboard.writeText(APP.telOPayRaw);
    await sleep(1);

    setCopying(false);
    setShowOPay(false);
  };
  //
  return (
    <div className="grid w-full gap-4 px-2 pb-8">
      <Button variant="secondary" onClick={handleBecomeGuest}>
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
        <Button variant="secondary" onClick={() => setShowOPay(true)}>
          Support {APP.name}
        </Button>
      )}
      <Button variant="default" onClick={handleAnalytics}>
        View Analytics
      </Button>
    </div>
  );
};
