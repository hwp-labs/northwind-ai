import type { Metadata } from "next";
import { AppBar } from "@/features/podcast/components/app-bar";
import { PATH } from "@/constants/PATH";
import { List } from "@/features/podcast/components/episodes/list";

export const metadata: Metadata = {
  title: "All Episodes",
};

export default async function EpisodesPage() {
  // "Discover new episodes"
  return (
    <>
      <AppBar
        title="All Episodes"
        backTo={PATH.podcast}
        search={{ placeholder: "Search episodes" }}
      />
      <main className="debug_ container-sm-podcast mt-2 flex flex-col flex-wrap gap-5 px-4 pb-6">
        <List />
      </main>
    </>
  );
}
