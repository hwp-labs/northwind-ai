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
      <CardBuilder.Header {...item}/>
      <CardBuilder.Container>
        <img
          src={`/uploads/podcast/${item.isFiresideChat ? "sony.png" : "halim.png"}`}
          className={clsx(
            "absolute size-full object-cover",
            item.isFiresideChat ? "object-top-left _scale-x-[-1]" : "object-top-right",
          )}
          alt=""
        />
        <div className="debug_ absolute bottom-16 left-8 z-1">
          <PodcastPostCardBuilder.Datetime {...item} />
          <PodcastPostCardBuilder.Venue {...item} />
          {item.guestUsername ? (
            <PodcastPostCardBuilder.Speakers {...item} />
          ) : (
            <p className="my-12" />
          )}
          <PodcastPostCardBuilder.Hero {...item} />
        </div>
        <PodcastPostCardBuilder.PoweredBy {...item} />
      </CardBuilder.Container>
    </>
  );
};
