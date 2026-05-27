"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
//
import { CardBuilder } from "../card-builder";
import { MONTH_SHORT } from "@/utils/moment-util";

interface Props {
  page?: number;
}

export const MonthlyPostCard = ({ page }: Props) => {
  const [i, setCounter] = useState(page || 1);

  const isMay = i === 5;
  const displayMonth = MONTH_SHORT[i - 1];
  const mutateCounter = () => setCounter((prev) => (prev < 12 ? prev + 1 : 1));

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!page) {
        const interval = setInterval(mutateCounter, 3000);
        return () => clearInterval(interval);
      }

      if (page > 0) setCounter(page);
    }
  }, [page]);
  //
  return (
    <>
      <CardBuilder.Header noBorder />
      <CardBuilder.Container className="bg-white">
        <figure className={clsx("mt-5", isMay && "-mt-0!")}>
          <div
            className={clsx(
              "relative z-2 mx-auto size-[120px]",
              isMay && "size-[180px]",
            )}
          >
            <img
              src={
                isMay
                  ? `/uploads/monthly/may-1.png`
                  : `/uploads/monthly/bot-${i}.png`
              }
              alt=""
              className="size-full object-contain"
            />
            <img
              src="/uploads/monthly/hello.png"
              alt=""
              width={48}
              className={clsx(
                "absolute top-2 -left-11",
                isMay && "top-8 -left-12",
              )}
            />
            {renderImgAttachment(i)}
          </div>
          <figcaption
            className={clsx(
              "font-f3 -ml-2 bg-clip-text text-center text-[340px] leading-72 font-bold text-transparent uppercase",
              "from-bot bg-gradient-to-b",
              isMay && "-mt-8 -ml-12",
            )}
          >
            {displayMonth}
          </figcaption>
        </figure>
        <CardBuilder.Description />
        <CardBuilder.CTA />
      </CardBuilder.Container>
    </>
  );
};

const renderImgAttachment = (i: number) =>
  ({
    2: (
      <img
        src="/uploads/monthly/bot-2-hearts.png"
        alt=""
        width={60}
        className="absolute top-0 -right-12"
      />
    ),
    10: (
      <img
        src="/uploads/monthly/bot-10-flag.png"
        alt=""
        width={60}
        className="absolute -right-12 bottom-0"
      />
    ),
    12: (
      <img
        src="/uploads/monthly/bot-12-tree.png"
        alt=""
        width={160}
        className="absolute -right-18 bottom-0"
      />
    ),
  })[i] ?? null;
