"use client";

import clsx from "clsx";
import { IconEyeClosed } from "@tabler/icons-react";
// 
import { Avatar } from "./avatar";
import { CtaButtons } from "./cta-buttons";
import { usePodcastStore } from "@/store/podcastStore";
import { transformSpeaker } from "@/lib/podcast/speakers/utils";
import { iSearch } from "@/utils";
import { data } from "@/lib/podcast/speakers/data";

export const List = () => {
  const search = usePodcastStore((s) => s.search);
  //
  return (
    <ul className="scroll-smooth">
      {data.map((item, i) => {
        const speaker = transformSpeaker(item.id);
        //
        return iSearch(speaker.fullName, search.value) ? (
          <li
            key={item.id}
            className={clsx(
              "flex-row-cb shrink-0 snap-center gap-6 border-b",
              i < 1 ? "pt-0 pb-4" : "py-4",
            )}
          >
            <figure className="flex-row-cs gap-4">
              <Avatar speaker={speaker} />
              <figcaption className="flex-col-sc gap-0.5 text-sm">
                <strong className="line-clamp-1 text-sm text-white">
                  {speaker.fullName}
                </strong>
                <p className="text-muted-foreground line-clamp-2 text-[12px]">
                  {speaker.bio?.replace("#", "")}
                  {item.bio?.endsWith("#") && (
                    <IconEyeClosed
                      size={16}
                      strokeWidth={2.5}
                      className="inline"
                    />
                  )}
                </p>
              </figcaption>
            </figure>
            <div className="flex-row-cs gap-4">
              <CtaButtons speaker={speaker} />
            </div>
          </li>
        ) : null;
      })}
    </ul>
  );
};
