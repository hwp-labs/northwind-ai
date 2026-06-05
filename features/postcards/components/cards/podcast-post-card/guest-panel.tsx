import {
  IconHelicopterLandingFilled,
  IconScanLetterA,
  IconEyeClosed,
} from "@tabler/icons-react";
import { TransformedSpeaker } from "@/lib/podcast/speakers/utils";

interface Props {
  data: TransformedSpeaker[];
}

export const GuestPanel = ({ data }: Props) => {
  return (
    <div className="space-y-4">
      {data.map((item, i) => (
        <figure key={i} className="flex-row-cs gap-3">
          <div className="relative">
            <div className="rounded-full bg-[conic-gradient(from_180deg,yellow,white,red,white)] p-[1.5px]">
              <img
                src={item.avatar}
                width={40}
                alt=""
                className="border-[#ddd]_ border-2_ rounded-full"
              />
            </div>
            {item.location?.flag ? (
              <img
                src={item.location?.flag}
                width={20}
                alt=""
                className="absolute bottom-0 left-1"
              />
            ) : null}
          </div>
          <figcaption className="flex flex-col">
            <div className="flex-row-cs gap-2 font-medium text-white">
              {item?.host ? item.displayName : item.fullName}
              {item?.host ? <IconHelicopterLandingFilled size={12} /> : null}
            </div>
            <small className="text-xs text-[#bbb]">
              {item.bio?.replace("#", "")}
              {item.bio?.endsWith("#") && (
                <IconEyeClosed
                  size={16}
                  strokeWidth={2.5}
                  className="inline"
                />
              )}
            </small>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
