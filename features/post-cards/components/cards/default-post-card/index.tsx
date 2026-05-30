import { Logo } from "@/components/logo";
import { CardBuilder } from "../../card-builder";
import { Topic } from "@/components/species/podcast-app/components/topic";
import { DatetimeVenue } from "@/components/species/podcast-app/components/datetime";
import { Tags } from "./tags";
import { GuestPanel } from "./guest-panel";
import { MetaCard } from "./meta-card";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { APP } from "@/constants/APP";

interface Props {
  page?: number;
}

export const DefaultPostCard = ({ page = 1 }: Props) => {
  const e = PodcastHelper.GetItemById(page);
  //
  return e ? (
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
            _topic={e.safeTopic}
            topic="Routine Medical Investigations_ API Modeling"
          />
          <div className="">
            <DatetimeVenue episode={e} _tonight />
            <div className="text-foreground font-f4 bg-black absolute right-0 -bottom-0.5 text-sm tracking-wider">
              {/* E{String(page).padStart(3, '0')} */}
            </div>
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
  ) : (
    <>
      <CardBuilder.Header />
      <CardBuilder.Container>
        <figure className="mt-16">
          <img
            src="/social-preview.png"
            alt=""
            width={640}
            className="mx-auto px-4"
          />
          <figcaption className="font-f3 mt-1 text-center text-[32px] font-bold">
            {APP.title}
          </figcaption>
        </figure>
        <CardBuilder.Description className="text-[14px] leading-6" />
        <CardBuilder.CTA />
      </CardBuilder.Container>
    </>
  );
};
