import clsx from "clsx";
//
import { CardBuilder } from "../../card-builder";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";
import { CardBuilder as PodcastPostCardBuilder } from "./card-builder";

interface Props {
  page?: number;
}

export const PodcastPostCard = ({ page = 1 }: Props) => {
  const item = PodcastHelper.GetPageItem(page);
  //
  return (
    <>
      <CardBuilder.Header />
      <CardBuilder.Container>
        <img
          src={`/uploads/blog/${item.isFiresideChat ? "sony.png" : "halim.png"}`}
          className={clsx(
            "absolute size-full object-cover",
            item.isFiresideChat ? "object-top-left" : "object-top-right",
          )}
          alt=""
        />
        <div className="debug_ absolute bottom-16 left-8 z-1">
          <PodcastPostCardBuilder.Datetime {...item} />
          <PodcastPostCardBuilder.Venue {...item} />
          <ul
            className={clsx(
              "flex-row-cs gap-2 text-sm",
              item.guest.username ? "mt-4 mb-10 ml-3 -rotate-4" : "my-6 ml-26",
            )}
          >
            <PodcastPostCardBuilder.Speaker label="host" value="@2gbeh" />
            {item.guest.username ? (
              <PodcastPostCardBuilder.Speaker
                label="guest"
                value={item.guest.username}
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
