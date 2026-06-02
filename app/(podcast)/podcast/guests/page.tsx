import type { Metadata } from "next";
import { IconInfoCircle } from "@tabler/icons-react";
//
import { AppBar } from "@/features/podcasts/components/app-bar";
import { PATH } from "@/constants/PATH";
import { data } from "@/lib/podcast/speakers/data";
import { SearchBar } from "@/features/podcasts/components/search-bar";
import { transformSpeaker } from "@/lib/podcast/speakers/utils";
import clsx from "clsx";
import Image from "next/image";
import { Topic } from "@/features/podcasts/components/topic";
import { Datetime } from "@/features/podcasts/components/datetime";
import { CtaButtons } from "@/features/podcasts/components/guests/cta-buttons";

export const metadata: Metadata = {
  title: "Featured Guests",
};

export default async function GuestsPage() {
  // "Discover new episodes"
  return (
    <>
      <AppBar
        title="Featured Guests"
        backTo={PATH.podcast}
        search={{ placeholder: "Search guest speaker" }}
      />
      <main className="debug_ container-md-podcast mt-2 flex flex-col flex-wrap gap-5 px-4 pb-6">
        <ul className="scroll-smooth">
          {data.map((item, i) => {
            const speaker = transformSpeaker(item.id);
            //
            return (
              <li
                key={i}
                className={clsx(
                  "flex-row-cb shrink-0 snap-center gap-6 border-b",
                  i < 1 ? "pt-0 pb-4" : "py-4",
                )}
              >
                <figure className="flex-row-cs gap-4">
                  <div className="relative">
                    <Image
                      src={speaker.avatar}
                      alt=""
                      width={56}
                      height={56}
                      className="border-outline min-h-[56px] min-w-[56px] rounded-full border-2"
                    />
                    {speaker.location?.flag ? (
                      <img
                        src={speaker.location.flag}
                        alt=""
                        width={24}
                        className="absolute right-0 bottom-0"
                      />
                    ) : null}
                  </div>
                  <figcaption className="flex-col-sc gap-0.5 text-sm">
                    <strong className="line-clamp-1 text-sm text-white">
                      {speaker.fullName}
                    </strong>
                    <p className="text-muted-foreground line-clamp-2 text-[12px]">
                      {speaker.bio}
                    </p>
                  </figcaption>
                </figure>
                <div className="flex-row-cs gap-4">
                  <CtaButtons speaker={speaker} />
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
