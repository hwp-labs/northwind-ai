import { cache } from "react";
import { Metadata } from "next";
//
import { CoverImage } from "@/components/atoms/cover-image";
import { ValuePropositionCards } from "@/components/molecules/value-proposition-cards";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { PageIdParams } from "@/types";
//
import { TopSection } from "@/features/podcasts/components/card/top-section";
import { RsvpFormWidgetV2 } from "@/features/podcasts/components/rsvp-form-widget/v2";

const getCachedItem = cache(async (params: PageIdParams['params']) =>
  PodcastHelper.GetIdItemAsync(params)
);

export async function generateMetadata({
  params,
}: PageIdParams): Promise<Metadata> {
   const item = await getCachedItem(params);
  //
  return {
    title: `${item.title} Design Session`,
  };
}

export default async function PodcastPage({ params }: PageIdParams) {
   const item = await getCachedItem(params);
  //
  return (
    <main>
      <TopSection {...item} />
      <RsvpFormWidgetV2 />
      <CoverImage />
      <ValuePropositionCards />
    </main>
  );
}
