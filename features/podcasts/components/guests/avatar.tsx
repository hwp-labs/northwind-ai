import Image from "next/image";
import { SpeakerDto } from "@/lib/podcast/speakers/types";

export const Avatar = ({ speaker }: { speaker: SpeakerDto }) => {
  return (
    <div className="relative">
      <Image
        src={speaker.avatar}
        alt=""
        width={56}
        height={56}
        className="border-outline min-h-[56px] min-w-[56px] rounded-full border-2"
      />
      {speaker.location?.flag ? (
        <img
          src={speaker.location.flag}
          alt=""
          width={24}
          className="absolute right-0 bottom-0"
        />
      ) : null}
    </div>
  );
};
