import type { Metadata } from "next";
import { AppBar } from "@/features/podcast/components/app-bar";
import { PATH } from "@/constants/PATH";
import { List } from "@/features/podcast/components/guests/list";

export const metadata: Metadata = {
  title: "Featured Guests",
};

export default async function GuestsPage() {
  return (
    <>
      <AppBar
        title="Featured Guests"
        backTo={PATH.podcast}
        search={{ placeholder: "Search speakers" }}
      />
      <main className="debug_ container-sm-podcast mt-2 flex flex-col flex-wrap gap-5 px-4 pb-6">
        <List />
      </main>
    </>
  );
}
