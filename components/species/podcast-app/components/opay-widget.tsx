"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  IconClipboardCheck,
  IconCopy,
  IconCopyCheck,
  IconHeartFilled,
} from "@tabler/icons-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { usePodcastStore } from "@/store/podcastStore";
import { sleep } from "@/utils";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";

interface Props {
  variant?: "icon" | "button" | "toggle" | "link";
  next?: ()=>void;
}

const TEL = "8169960927";
var render: React.ReactNode = null;

export const OpayWidget = ({ variant = "icon", next }: Props) => {
  const router = useRouter();
  const modal = usePodcastStore((s) => s.modal);

  const [showOPay, setShowOPay] = useState(false);
  const [copying, setCopying] = useState(false);

  const handleCopy = async () => {
    setCopying(true);

    await navigator.clipboard.writeText(TEL);
    await sleep(1.5);

    setCopying(false);
    setShowOPay(false);
  };

  switch (variant) {
    case "toggle":
      render = showOPay ? (
        <Button onClick={handleCopy} className="bg-opay-green! text-opay-blue!">
          {copying ? (
            <>
              <IconClipboardCheck strokeWidth={2.5} />
              Copied!
            </>
          ) : (
            <>
              <IconHeartFilled color="var(--destructive)" />
              <strong>
                OPay #<b>{TEL}</b>
              </strong>
            </>
          )}
        </Button>
      ) : (
        <Button variant="secondary" onClick={() => setShowOPay(true)}>
          Support {APP.name}
        </Button>
      );
      break;
    case "button":
      render = modal.open ? null : (
        <button
          onClick={handleCopy}
          className="button-base bg-opay-green text-opay-blue h-[45px] w-full rounded-full font-medium"
        >
          {copying && <IconClipboardCheck />}
          {copying ? "Copied!" : "Copy Number"}
        </button>
      );
      break;
    case "link":
      render = (
        <Button
          variant="outline"
          onClick={() => {
            router.push(PATH.podcastSupport);
            next?.()
          }}
          className="border-muted-foreground text-muted-foreground border-2_"
        >
          Support {APP.name}
        </Button>
      );
      break;
    default:
      render = (
        <button onClick={handleCopy} title="Copy">
          {copying ? <IconClipboardCheck size={20} /> : <IconCopy size={20} />}
        </button>
      );
  }

  return render;
};
