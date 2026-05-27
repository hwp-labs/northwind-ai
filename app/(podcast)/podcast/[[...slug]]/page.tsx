import type { Metadata } from "next";

import { AppBar } from "@/components/species/podcast-app/components/app-bar";
import { Hero } from "@/components/species/podcast-app/components/hero";
import { Guests } from "@/components/species/podcast-app/components/guests";
import { Episodes } from "@/components/species/podcast-app/components/episodes";

export const metadata: Metadata = {
  title: "Discover New Episodes",
};

export default async function PodcastPage() {
  return (
    <>
      <AppBar />
      <main className="mx-auto flex flex-col gap-4 w-full sm:w-2xl _debug">
        <Hero />
        <Guests />
        <Episodes />
      </main>
    </>
  );
}
