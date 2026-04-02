import { Metadata } from "next";
//
import {
  DefaultPostCard,
  MonthlyPostCard,
  FAQPostCard,
  PodcastPostCard,
  BlogPostCard
} from "@/features/post-cards/components/cards";
import { PageParams } from "@/types";

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
        ][tabIndex]
      }
    </main>
  );
}
