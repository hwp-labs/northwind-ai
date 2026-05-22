import { Header } from "@/components/species/podcast-app/components/header";
import { Hero } from "@/components/species/podcast-app/components/hero";
import { SearchBar } from "@/components/species/podcast-app/components/search-bar";

export default async function PodcastPage() {
  return (
    <main className="grid gap-4">
      <Header />
      <SearchBar />
      <Hero />
    </main>
  );
}
