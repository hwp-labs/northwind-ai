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
import { EpisodeHelper } from "@/lib/podcast/episodes/helper";

const startIndex = 2;

export const Hero = () => {
  // const favorites = EpisodeHelper.GetItemsById(6, 10, 11);
  const favorites = EpisodeHelper.GetItemsById(1, 2, 3);

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
                <div className="debug_ flex-col-sc w-[280px] flex-1 gap-2">
                  <Topic topic={episode.safeTopic} variant="hero" />
                  <Datetime episode={episode} />
                </div>
                <div className="flex-row-sb debug_ max-h-[60px] min-h-[60px]">
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
