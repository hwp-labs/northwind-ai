import { Metadata } from "next";
//
import { PageParams } from "@/types";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
//
import {
  Header,
  Summary,
  Host,
  Guests,
} from "@/features/podcasts/components/card";
import { ListenerFormWidget } from "@/features/podcasts/components/listener-form-widget";

import Image from "next/image";
//
import { PromptBar } from "@/components/molecules/prompt-bar";
import { Hero } from "@/components/molecules/hero";
import { CTAButtons } from "@/components/molecules/cta-buttons";
import { StatisticsWidget } from "@/components/widgets/statistics-widget";
import { ValuePropositionCards } from "@/components/molecules/value-proposition-cards";
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export async function generateMetadata({
  params,
}: PageParams<string[]>): Promise<Metadata> {
  const item = await PodcastHelper.GetItemAsync(params);
  //
  return {
    title: `${item.topic.title} Design Session`,
  };
}

export default async function PodcastPage({ params }: PageParams<string[]>) {
  const item = await PodcastHelper.GetItemAsync(params);
  //
  return (
    <main className="">
      <PromptBar>
        <span className="tracking-wider uppercase">
          {item.isConcluded
            ? "Concluded: "
            : item.isOngoing
              ? "Ongoing: "
              : "Upcoming: "}
        </span>
        {item.isOngoing ? (
          <a
            href={item.spaceUrl || "#"}
            title="Join"
            target="_blank"
            rel="noopener noreferrer"
            className="_debug flex-row-cs ml-auto gap-1.5"
          >
            Live
            <SquareArrowOutUpRightIcon size={16} strokeWidth={3} />
          </a>
        ) : (
          `${item.dateText}, 2026 | ${item.timeText} (WAT)`
        )}
      </PromptBar>

      <Hero
        title={`${item.topic.title} Design Session`}
        summary={<Summary {...item} noLineBreak />}
      />
      <CTAButtons />
      <Image
        className="mx-auto mt-16 px-4 invert lg:px-0"
        src="/social-preview.png"
        alt=""
        width={1280}
        height={640}
        priority
      />
      <StatisticsWidget />
      <ValuePropositionCards />
    </main>
  );
}
