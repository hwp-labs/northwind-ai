import { Logo } from "@/components/logo";
import { Topic } from "@/features/podcasts/components/topic";
import { DatetimeVenue } from "@/features/podcasts/components/datetime";
import { Tags } from "./tags";
import { GuestPanel } from "./guest-panel";
import { MetaCard } from "./meta-card";
import { transformEpisode } from "@/lib/podcast/episodes/utils";

interface Props {
  page?: number;
}

export const PodcastPostCard = ({ page = 1 }: Props) => {
  const e = transformEpisode(page);
  //
  return (
    <div className="text-foreground bg-background border_ _mx-auto relative h-[640px] w-[360px] overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8), black), url(${e.cover})`,
          backgroundPosition: e.series ? "52% top" : "85% top",
        }}
      />
      <main className="absolute z-1 px-6">
        <header className="flex-row-cb mt-10">
          <Logo />
        </header>
        <Tags list={e.tags} />
        <article className="mt-2 space-y-4">
          <Topic
            variant="snap"
            topic={e.topic}
            _topic="Routine Medical Investigations_ API Modeling"
          />
          <div className="">
            <DatetimeVenue episode={e} _tonight />
          </div>
        </article>
      </main>
      <footer className="absolute bottom-0 px-6 py-8">
        <GuestPanel data={e.Speakers} />
        <MetaCard
          _meta={{
            src: e.thumbnail,
            title: e.summary,
            url: "siiqo.com",
            cta: "Get Started",
          }}
        />
      </footer>
    </div>
  );
};
