import { useEffect, useState } from "react";
//
import { Avatar } from "@/components/shadcn/ui/avatar";
import { getListenersCountAction } from "@/lib/supabase/services/listeners/actions/getListenersAction";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";

interface Avatar {
  src: string;
  alt: string;
}

const defaultAvatar = [
  {
    src: "/images/avatar-etugbeh.png",
    alt: "E",
  },
  {
    src: "/images/avatar.png",
    alt: "A",
  },
];

export function useRsvpAvatarGroup(podcast_id: number) {
  const [total, setTotal] = useState(1);
  const [avatars, setAvatars] = useState<Avatar[]>(defaultAvatar);

  useEffect(() => {
    fetcher();
  }, []);

  async function fetcher() {
    const { listeners, logoSafe } = PodcastHelper.GetPageItem(podcast_id);

    if (logoSafe.length) {
      const transformed = transformLogos(logoSafe);
      setAvatars(transformed);
    }

    if (listeners) {
      setTotal(listeners);
    } else {
      const { data: total } = await getListenersCountAction({ podcast_id });
      setTotal(total || 1);
    }
  }

  return { total, avatars };
}

const transformLogos = (logos: string[]) => {
  const arr: Avatar[] = [];

  logos.length === 1 && arr.push(defaultAvatar[0]);
  logos.forEach((item) =>
    arr.push({
      src: `/uploads/logos/${item}`,
      alt: item.charAt(0),
    }),
  );


  return arr;
};
