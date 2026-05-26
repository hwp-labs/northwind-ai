"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/ui/carousel";
import { Container } from "./container";
import { Datetime } from "./datetime";
import { CtaButton } from "./cta-button";
import { RsvpAvatars } from "./rsvp-avatars";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";

export const Hero = () => {
  return (
    <section className="px-4">
      <Carousel opts={{ startIndex: 2 }}>
        <CarouselContent>
          {[
            PodcastHelper.GetPageItem(4),
            PodcastHelper.GetPageItem(6),
            PodcastHelper.GetPageItem(10),
          ].map((E, i) => (
            <CarouselItem key={i}>
              <Container
                key={i}
                index={i}
                src={`/uploads/podcast/${E.series ? "sony.png" : "halim.png"}`}
              >
                <div className="debug_ flex-col-se w-[250px] flex-1 gap-2">
                  <h1 className="font-[Bebas_Neue] text-[26px] leading-[28px] font-medium tracking-[3px]">
                    {E.titleSeriesText}
                  </h1>
                  <Datetime episode={E} />
                </div>
                <div className="flex-row-cb debug_">
                  <CtaButton episode={E} />
                  <RsvpAvatars id={E.id} />
                </div>
              </Container>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
