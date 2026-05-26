import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getListenersCountAction } from "@/lib/supabase/services/listeners/actions/getListenersAction";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";

export function useFetchRsvp(id?: number) {
  const params = useParams();

  const _id = Number(params.id || id || 1);
  const item = PodcastHelper.GetPageItem(_id);
  const avatars = item.displayAvatars || [
    "/images/icon-hwp.png",
    "/images/avatar-etugbeh.png",
    "/images/avatar.png",
  ];

  const [total, setTotal] = useState(1);

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = async () => {
    if (item.listeners) {
      setTotal(item.listeners);
      return;
    }

    const { data: total } = await getListenersCountAction({
      filterByPodcastId: _id,
    });
    setTotal(total || 1);
  };

  return { avatars, total };
}
