import clsx from "clsx";
//
import { CardBuilder } from "../../card-builder";
import {
  PodcastDto,
  PodcastFormatEnum,
} from "@/lib/supabase/services/podcasts/types";
import data from "@/lib/supabase/services/podcasts/data.json";
//
import { CardBuilder as PodcastPostCardBuilder } from "./card-builder";

interface Props {
  page?: number;
}

export const PodcastPostCard = ({ page = 1 }: Props) => {
  const i = page - 1;
  const item = (data[i] || data[0]) as PodcastDto;
  const isFiresideChat = item.format === PodcastFormatEnum.FIRESIDE_CHAT;
  //
  return (
    <>
      <CardBuilder.Header />
      <CardBuilder.Container>
        <img
          src={`/uploads/blog/${isFiresideChat ? "sony.png" : "halim.png"}`}
          className={clsx(
            "absolute size-full object-cover",
            isFiresideChat ? "object-top-left" : "object-top-right",
          )}
          alt=""
        />
        <div className="debug_ absolute bottom-16 left-8 z-1">
          <PodcastPostCardBuilder.Datetime {...item} />
          <PodcastPostCardBuilder.Venue {...item} />
          <ul
            className={clsx(
              "flex-row-cs gap-2 text-sm",
              item.guestUsername ? "mt-4 mb-10 ml-0 -rotate-4" : "my-6 ml-26",
            )}
          >
            <PodcastPostCardBuilder.Speaker label="host" value="@2gbeh" />
            {item.guestUsername ? (
              <PodcastPostCardBuilder.Speaker
                label="guest"
                value={item.guestUsername}
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
