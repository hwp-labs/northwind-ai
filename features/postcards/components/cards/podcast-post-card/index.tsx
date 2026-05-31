import { Logo } from "@/components/logo";
import { Topic } from "@/features/podcast/components/topic";
import { DatetimeVenue } from "@/features/podcast/components/datetime";
import { Tags } from "./tags";
import { GuestPanel } from "./guest-panel";
import { MetaCard } from "./meta-card";
import { EpisodeHelper } from "@/lib/podcast/episodes/helper";

interface Props {
  page?: number;
}

export const PodcastPostCard = ({ page = 1 }: Props) => {
  const e = EpisodeHelper.GetItemById(page);
  //
  return (
    <div className="text-foreground bg-background border_ _mx-auto relative h-[640px] w-[360px] overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8), black), url(${e.seriesImage})`,
          backgroundPosition: e.series ? "52% top" : "85% top",
        }}
      />
      <main className="absolute z-1 px-6">
        <header className="flex-row-cb mt-10">
          <Logo />
        </header>
        <Tags list={e.safeTags} />
        <article className="mt-2 space-y-4">
          <Topic
            variant="snap"
            topic={e.safeTopic}
            _topic="Routine Medical Investigations_ API Modeling"
          />
          <div className="">
            <DatetimeVenue episode={e} _tonight />
          </div>
        </article>
      </main>
      <footer className="absolute bottom-0 px-6 py-8">
        <GuestPanel data={e.safeGuests} showHost />
        <MetaCard
          _meta={{
            src: "/uploads/logos/siiqo.png",
            url: "siiqo.com",
            title: "Escrow-based, Crypto-enabled, Digital Storefront for SMEs",
            cta: "Get Started",
          }}
        />
      </footer>
    </div>
  );
};
