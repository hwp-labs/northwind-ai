import { AppBar } from "@/features/podcasts/components/app-bar";
import { Hero } from "@/features/podcasts/components/hero";
import { Guests } from "@/features/podcasts/components/guests";
import { Episodes } from "@/features/podcasts/components/episodes";


export default async function PodcastPage() {
  return (
    <>
      <AppBar />
      <main className="flex flex-col gap-4 container-sm-podcast _debug mt-2">
        <Hero />
        <Guests />
        <Episodes />
      </main>
    </>
  );
}
