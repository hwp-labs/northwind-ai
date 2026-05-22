import { Header } from "@/components/species/podcast-app/components/header";
import { SearchBar } from "@/components/species/podcast-app/components/search-bar";
import { Hero } from "@/components/species/podcast-app/components/hero";
import { Guests } from "@/components/species/podcast-app/components/guests";

export default async function PodcastPage() {
  return (
    <main className="grid gap-4">
      <Header />
      <SearchBar />
      <Hero />
      <Guests />
    </main>
  );
}
