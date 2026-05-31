import { IconHelicopterLandingFilled } from "@tabler/icons-react";
import { PodcastSpeakerDto } from "@/lib/supabase/services/podcasts/types";

interface Props {
  data: PodcastSpeakerDto[];
  showHost?: boolean;
}

export const GuestPanel = ({ data, showHost }: Props) => {
  const safeData = showHost
    ? [
        {
          avatar: "/images/avatar-etugbeh.png",
          name: "Emanuel",
          username: "@2gbeh",
          bio: "AI Product Engineer, HWP Labs",
          host: true,
        },
        ...data,
      ]
    : data;
  //
  return (
    <div className="space-y-4">
      {safeData.map((item, i) => (
        <figure key={i} className="flex-row-cs gap-3">
          <div className="relative">
          <div className="p-[1.5px] rounded-full bg-[conic-gradient(from_180deg,yellow,white,red,white)]">
            <img
              src={item.avatar}
              width={40}
              alt=""
              className="border-[#ddd]_ rounded-full border-2_"
            />
          </div>
            {item.flag ? (
              <img
                src={item.flag}
                width={24}
                alt=""
                className="absolute left-1 bottom-0"
              />
            ) : null}
          </div>
          <figcaption className="flex flex-col">
            <div className="flex-row-cs gap-2 font-medium text-white">
              {item.name}
              {item?.host ? <IconHelicopterLandingFilled size={12} /> : null}
            </div>
            <small className="text-xs text-[#bbb]">{item.bio}</small>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
