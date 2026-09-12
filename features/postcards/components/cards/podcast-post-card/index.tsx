import clsx from "clsx";
//
import { Logo } from "@/components/logo";
import { Topic } from "@/features/podcast/components/topic";
import { DatetimeVenue } from "@/features/podcast/components/datetime";
import { Tags } from "./tags";
import { GuestPanel } from "./guest-panel";
import { MetaCard } from "./meta-card";
import { transformEpisode } from "@/lib/podcast/episodes/utils";
import { Footer } from "./footer";

interface Props {
  page?: number;
}

export const PodcastPostCard = ({ page = 1 }: Props) => {
  const e = transformEpisode(page);
  //
  return (
    <div className="text-foreground bg-background border_ _mx-auto relative h-[640px] w-[365px] overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8), black), url(${e.cover})`,
          backgroundPosition: e.coverPosition,
        }}
      />
      <main className="debug_ absolute z-1 pr-0 pl-6">
        <header className="flex-row-cb mt-10">
          <Logo />
          <img
            src="/images/emblem.png"
            alt=""
            width={80}
            height={80}
            className="absolute top-4 right-5 hidden"
          />
        </header>
        <Tags list={e.tags} />
        <article
          className={clsx(
            "debug_ space-y-5",
            e.tags.length > 3 ? "mt-4.5" : "mt-2.5",
          )}
        >
          <Topic
            variant="snap"
            episode={e}
            // topic="Design Systems & Finite State Machines"
            // className="text-[27.5px]! _leading-[40px]!"
          />
          <DatetimeVenue episode={e} />
        </article>
      </main>
      <section className="w-full_ absolute bottom-12 px-6">
        <GuestPanel data={e.Speakers} />
        <MetaCard meta={e.meta} />
      </section>
      <Footer />
    </div>
  );
};
