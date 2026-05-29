"use client";

import { useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
//
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn/ui/carousel";
import { Topic } from "../topic";
import { Datetime } from "../datetime";
import { Card } from "./card";
import { CtaButton } from "./cta-button";
import { RsvpAvatars } from "./rsvp-avatars";
import { Dots } from "./dots";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";

const startIndex = 2;

export const Hero = () => {
  const favorites = PodcastHelper.GetItemsById(6, 10, 11);

  const [selected, setSelected] = useState(startIndex);

  const handleSwipe = (api?: EmblaCarouselType) => {
    if (api) {
      api.on("select", () => setSelected(api.selectedScrollSnap()));
    }
  };
  //
  return (
    <section className="px-4">
      <Carousel setApi={handleSwipe} opts={{ startIndex }}>
        <CarouselContent>
          {favorites.map((episode, i) => (
            <CarouselItem key={i}>
              <Card src={episode.seriesImage}>
                <div className="debug_ flex-col-se w-[280px] flex-1 gap-2">
                  <Topic episode={episode} variant="hero" />
                  <Datetime episode={episode} />
                </div>
                <div className="flex-row-cb debug_">
                  <CtaButton episode={episode} />
                  <RsvpAvatars id={episode.id} />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Dots selected={selected} />
    </section>
  );
};
