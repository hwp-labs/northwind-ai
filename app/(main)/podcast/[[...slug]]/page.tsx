import { Metadata } from "next";
//
import { CoverImage } from "@/components/atoms/cover-image";
import { ValuePropositionCards } from "@/components/molecules/value-proposition-cards";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { PageParams } from "@/types";
//
import { TopSection } from "@/features/podcasts/components/card/top-section";
import { RsvpFormWidgetV2 } from "@/features/podcasts/components/rsvp-form-widget/v2";

export async function generateMetadata({
  params,
}: PageParams<string[]>): Promise<Metadata> {
  const item = await PodcastHelper.GetItemAsync(params);
  //
  return {
    title: `${item.title} Design Session`,
  };
}

export default async function PodcastPage({ params }: PageParams<string[]>) {
  const item = await PodcastHelper.GetItemAsync(params);
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
