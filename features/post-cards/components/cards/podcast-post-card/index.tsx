import clsx from "clsx";
//
import { CardBuilder } from "../../card-builder";
import { PodcastDto } from "@/lib/supabase/services/podcasts/types";
import data from "@/lib/supabase/services/podcasts/data.json";
//
import { CardBuilder as PodcastPostCardBuilder } from "./card-builder";

interface Props {
  page?: number;
}

export const PodcastPostCard = ({ page = 1 }: Props) => {
  const i = page - 1;
  const item = (data[i] || data[0]) as PodcastDto;
  //
  return (
    <>
      <CardBuilder.Header />
      <CardBuilder.Container>
        <img
          src="/uploads/blog/halim.png"
          className="absolute size-full object-cover object-top-right"
          alt=""
        />
        <div className="debug_ absolute bottom-16 left-8 z-1">
          <PodcastPostCardBuilder.Datetime {...item} />
          <PodcastPostCardBuilder.Venue {...item} />
          <ul
            className={clsx(
              "flex-row-cs gap-2 text-sm",
              item.guestName ? "ml-4 -rotate-4 mb-10 mt-4" : "ml-26 my-6",
            )}
          >
            <PodcastPostCardBuilder.Speaker label="host" value="@2gbeh" />
            {item.guestName ? (
              <PodcastPostCardBuilder.Speaker
                label="guest"
                value={item.guestName}
              />
            ) : null}
          </ul>
          <PodcastPostCardBuilder.Hero {...item} />
        </div>
        <PodcastPostCardBuilder.PoweredBy {...item} />
      </CardBuilder.Container>
    </>
  );
};
