import { Logo } from "@/components/logo";
import { Topic } from "@/features/podcasts/components/topic";
import { DatetimeVenue } from "@/features/podcasts/components/datetime";
import { Tags } from "./tags";
import { GuestPanel } from "./guest-panel";
import { MetaCard } from "./meta-card";
import { transformEpisode } from "@/lib/podcast/episodes/utils";
import Image from "next/image";
import { APP_PODCAST } from "@/constants/APP_PODCAST";

interface Props {
  page?: number;
}

export const PodcastPostCard = ({ page = 1 }: Props) => {
  const e = transformEpisode(page);
  //
  return (
    <div className="text-foreground bg-background border_ _mx-auto relative h-[640px] w-[370px] overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8), black), url(${e.cover})`,
          backgroundPosition: e.series ? "52% top" : "85% top",
        }}
      />
      <main className="debug_ absolute z-1 px-6">
        <Image
          src="/images/emblem.png"
          alt=""
          width={80}
          height={80}
          className="absolute top-4 right-5"
        />
        <header className="flex-row-cb mt-10">
          <Logo />
        </header>
        <Tags list={e.tags} />
        <article className="debug_ mt-2.5 space-y-6">
          <Topic
            variant="snap"
            // topic="Design Systems & Finite State Machines"
            topic="Youth Politics & Voter Pre-reg Data"
            episode={e}
            // className="text-[31px]!"
          />
          <DatetimeVenue episode={e} _tonight />
        </article>
      </main>
      <section className="absolute bottom-12 px-6">
        <GuestPanel data={e.Speakers} />
        <MetaCard meta={e.meta} />
      </section>
      <footer className="text-muted font-f4 absolute bottom-4 w-full text-center text-xs tracking-widest">
        {APP_PODCAST.domain}
      </footer>
    </div>
  );
};
