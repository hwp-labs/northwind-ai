"use client";

import { useRouter } from "next/navigation";
//
import { Button } from "../shadcn/ui/button";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";
import { COPY } from "@/constants/LOCALE";

export const CTAButtons = () => {
  const router = useRouter();

  const handleBookDemo = () => router.push(PATH.getStarted);
  const handleTalkSales = () => {
    const text = COPY.promptWithHi;
    const textEncoded = encodeURIComponent(text);
    window.open(`${APP.whatsappSalesUrl}?text=${textEncoded}`, "_blank");
  };
  //
  return (
    <section className="mt-10 flex flex-col justify-center gap-5 px-6 md:flex-row md:items-center">
      <Button size="lg" variant="secondary" onClick={handleBookDemo}>
        Request a demo
      </Button>
      <Button
        size="lg"
        variant="default"
        onClick={handleTalkSales}
        className="bg-gray-900"
      >
        Talk to sales
      </Button>
    </section>
  );
};
