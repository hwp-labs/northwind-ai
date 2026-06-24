import { AppBar } from "@/features/podcast/components/app-bar";
import { Hero } from "@/features/podcast/components/hero";
import { Guests } from "@/features/podcast/components/guests";
import { Episodes } from "@/features/podcast/components/episodes";

export default async function PodcastPage() {
  return (
    <>
      <AppBar />
      <main className="container-sm-podcast _debug mt-2 flex flex-col gap-4">
        <Hero />
        <Guests />
        <Episodes />
      </main>
    </>
  );
}
