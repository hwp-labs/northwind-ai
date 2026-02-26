import clsx from "clsx";
//
import { CardBuilder } from "../../card-builder";
// 
import { PodcastPostCardBuilder } from "./ui/builder";
import { Datetime } from "./ui/datetime";
import { PodcastItem } from "./types";
import data from "./data.json";

interface Props {
  page?: number;
}

export const PodcastPostCard = ({ page = 1 }: Props) => {
  const i = page - 1;
  const item = (data[i] || data[0]) as PodcastItem;
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
          <Datetime {...item} />
          <PodcastPostCardBuilder.Venue {...item} />
          <ul
            className={clsx(
              "flex-row-cs gap-2 text-xs",
              item.guestName ? "mt-4 ml-4 -rotate-4" : "mt-6 ml-28",
            )}
          >
            <PodcastPostCardBuilder.Speaker label="host" value="@2gbeh" />
            {item.guestName ? (
              <PodcastPostCardBuilder.Speaker label="guest" value={item.guestName} />
            ) : null}
          </ul>
          <PodcastPostCardBuilder.Hero {...item} />
        </div>
        <PodcastPostCardBuilder.PoweredBy {...item} />
      </CardBuilder.Container>
    </>
  );
};