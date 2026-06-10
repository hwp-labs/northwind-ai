import { Metadata } from "next";
//
import { PageParams } from "@/types";
import { MonthlyPostCard } from "@/features/postcards/components/cards/monthly-post-card";
import { FAQPostCard } from "@/features/postcards/components/cards/faq-post-card";
import { PodcastPostCard } from "@/features/postcards/components/cards/podcast-post-card";
import { QversePostCard } from "@/features/postcards/components/cards/qverse-post-card";

export const metadata: Metadata = {
  title: "Post Cards",
};

export default async function PreviewPostCardsPage({
  searchParams,
}: PageParams) {
  const searchParamsAsync = await searchParams;
  const tabIndex = Number(searchParamsAsync.tabIndex || 0);
  const page = Number(searchParamsAsync.page || 0);
  //
  return (
    <main
      id="post-card"
      className="text-background _debug flex-col-x mx-auto min-h-[640px] w-[640px]"
    >
      {
        [
          <MonthlyPostCard page={page} />,
          <FAQPostCard page={page} />,
          <PodcastPostCard page={page} />,
          <QversePostCard page={page} />,
        ][tabIndex]
      }
    </main>
  );
}
