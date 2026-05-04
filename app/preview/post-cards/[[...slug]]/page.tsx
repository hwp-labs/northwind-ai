import { Metadata } from "next";
//
import { PageParams } from "@/types";
import { DefaultPostCard } from "@/features/post-cards/components/cards/default-post-card";
import { MonthlyPostCard } from "@/features/post-cards/components/cards/monthly-post-card";
import { FAQPostCard } from "@/features/post-cards/components/cards/faq-post-card";
import { PodcastPostCard } from "@/features/post-cards/components/cards/podcast-post-card";
import { BlogPostCard } from "@/features/post-cards/components/cards/blog-post-card";
import { QversePostCard } from "@/features/post-cards/components/cards/qverse-post-card";

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
          <DefaultPostCard />,
          <MonthlyPostCard page={page} />,
          <FAQPostCard page={page} />,
          <PodcastPostCard page={page} />,
          <BlogPostCard page={page} />,
          <QversePostCard page={page} />,
        ][tabIndex]
      }
    </main>
  );
}
