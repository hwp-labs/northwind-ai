import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { getListenersCountAction } from "@/lib/supabase/services/listeners/actions/getListenersAction";

interface Props {
  podcast_id: number;
}

export const Guests = async ({ podcast_id }: Props) => {
  const { data: total } = await getListenersCountAction({ podcast_id });
  const totalSafe = (total || 0) + 5;
  //
  return (
    <figure className="flex-row-cs gap-2">
      <AvatarGroup count={totalSafe - 3}>
        {[
          {
            src: "/images/icon-hwp-labs.png",
            alt: "@HWP_Labs",
            text: "HL",
          },
          {
            src: "/icon.png",
            alt: "@northwind_ai",
            text: "NA",
          },
          {
            src: "/images/avatar.png",
            alt: "@2gbeh",
            text: "ET",
          },
        ].map((item, i) => (
          <Avatar key={i}>
            <AvatarImage src={item.src} alt={item.alt} />
            <AvatarFallback>{item.text}</AvatarFallback>
          </Avatar>
        ))}
      </AvatarGroup>
      <figcaption className="text-xs font-medium">
        {totalSafe} Guests
      </figcaption>
    </figure>
  );
};
