import { cache } from "react";
import { Metadata } from "next";
//
import { CoverImage } from "@/components/atoms/cover-image";
import { ValuePropositionCards } from "@/components/molecules/value-proposition-cards";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { PageIdParams } from "@/types";
//
import { PromptBarHero } from "@/features/podcasts/components/prompt-bar-hero";
import { RsvpFormWidget } from "@/features/podcasts/components/rsvp-form-widget";

const getCachedItem = cache(async (params: PageIdParams["params"]) =>
  PodcastHelper.GetIdItemAsync(params),
);

export async function generateMetadata({
  params,
}: PageIdParams): Promise<Metadata> {
  const item = await getCachedItem(params);
  //
  return {
    title: item.titleSeriesText,
  };
}

export default async function PodcastPage({ params }: PageIdParams) {
  const item = await getCachedItem(params);
  //
  return (
    <main>
      <PromptBarHero {...item} />
      <RsvpFormWidget />
      <CoverImage />
      <ValuePropositionCards />
    </main>
  );
}
