import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getListenersCountAction } from "@/lib/supabase/services/listeners/actions/getListenersAction";
import { EpisodeHelper } from "@/lib/podcast/episodes/helper";

export function useFetchRsvp(id?: number) {
  const params = useParams();

  const _id = Number(params.id || id || 1);
  const item = EpisodeHelper.GetPageItem(_id);
  const avatars = item.displayAvatars
    ? item.displayAvatars.slice(0, 3)
    : [
        "/images/icon-hwp.png",
        "/images/avatar-etugbeh.png",
        "/images/avatar.png",
      ];

  const [total, setTotal] = useState(1);

  useEffect(() => {
    fetcher();
  }, [id]);

  const fetcher = async () => {
    if (item.listeners) {
      setTotal(item.listeners);
      return;
    }

    const { data: total } = await getListenersCountAction({
      filterByPodcastId: _id,
    });
    if (total) {
      const guestsNotInAvatarGroup = avatars.length - 3;
      setTotal(total + guestsNotInAvatarGroup);
    }
  };

  return { avatars, total };
}
