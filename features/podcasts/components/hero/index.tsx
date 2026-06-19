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
import { transformEpisode } from "@/lib/podcast/episodes/utils";
import { data } from "@/lib/podcast/episodes/data";

const startIndex = 2;
const favorites = 1 ? [6, 10, 16] : Array.from({ length: data.length }, (_, i) => i + 1);

export const Hero = () => {
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
          {favorites.map((id, i) => {
            const episode = transformEpisode(id);
            //
            return (
              <CarouselItem key={i}>
                <Card src={episode.cover}>
                  <div className="debug_ flex-col-sc w-[280px] flex-1 gap-2">
                    <Topic topic={episode.topic} variant="hero" />
                    <Datetime episode={episode} />
                  </div>
                  <div className="flex-row-sb debug_ max-h-[60px] min-h-[60px]">
                    <CtaButton episode={episode} />
                    <RsvpAvatars id={id} />
                  </div>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <Dots selected={selected} />
    </section>
  );
};
