import { Header } from "@/features/podcasts/components/header";
import { SearchBar } from "@/features/podcasts/components/search-bar";

export default async function PodcastPage() {
  return (
    <main className="grid gap-4">
      <Header/>
      <SearchBar/>    
    </main>
  );
}
