import type { Metadata } from "next";

import { Header } from "@/components/species/podcast-app/components/header";
import { Hero } from "@/components/species/podcast-app/components/hero";
import { Guests } from "@/components/species/podcast-app/components/guests";
import { Episodes } from "@/components/species/podcast-app/components/episodes";
import { Footer } from "@/components/species/podcast-app/components/footer";

export const metadata: Metadata = {
  title: "Discover New Episodes",
};

export default async function PodcastPage() {
  return (
    <main className="grid gap-4">
      <Header />
      <div className="mx-auto grid gap-4">
        <Hero />
        <Guests />
        <Episodes />
      </div>
      <Footer />
    </main>
  );
}
