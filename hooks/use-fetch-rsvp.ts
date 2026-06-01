import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getListenersCountAction } from "@/lib/supabase/services/listeners/actions/getListenersAction";
import { transformEpisode } from "@/lib/podcast/episodes/utils";

export function useFetchRsvp(id?: number) {
  const params = useParams();

  const _id = Number(params.id || id || 1);
  const episode = transformEpisode(_id);
  const avatars = episode.displayAvatars.slice(0, 3);

  const [total, setTotal] = useState(1);

  useEffect(() => {
    fetcher();
  }, [id]);

  const fetcher = async () => {
    if (episode.listeners) {
      setTotal(episode.listeners);
      return;
    }

    const { data: total } = await getListenersCountAction({
      filterByPodcastId: _id,
    });
    if (total) {
      const guestsNotInAvatarGroup = episode.displayAvatars.length - 3;
      setTotal(total + guestsNotInAvatarGroup);
    }
  };

  return { avatars, total };
}
