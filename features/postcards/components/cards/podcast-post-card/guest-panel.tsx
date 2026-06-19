import clsx from "clsx";
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
  const sm = data.length > 3;
  const dim = sm ? 35 : 40;
  //
  return (
    <div className={clsx(sm ? "space-y-3" : "space-y-4")}>
      {data.map((item, i) => (
        <figure key={i} className="flex-row-cs gap-3">
          <div className="relative">
            <div className="rounded-full bg-[conic-gradient(from_180deg,yellow,white,red,white)] p-[1.5px]">
              <img
                src={item.avatar}
                width={dim}
                height={dim}
                alt=""
                className="border-[#ddd]_ border-2_ rounded-full bg-white"
              />
            </div>
            {item.location?.flag ? (
              <img
                src={item.location?.flag}
                width={20}
                alt=""
                className="absolute -bottom-0.5 left-1"
              />
            ) : null}
          </div>
          <figcaption className="flex flex-col">
            <div
              className={clsx(
                "flex-row-cs gap-2 font-medium text-white",
                sm && "text-[15px]",
              )}
            >
              {item?.host ? item.displayName : item.fullName}
              {item?.host ? <IconHelicopterLandingFilled size={12} /> : null}
            </div>
            <small className="text-xs text-[#bbb]">
              {item.bio?.replace("#", "")}
              {item.bio?.endsWith("#") && (
                <IconEyeClosed size={16} strokeWidth={2.5} className="inline" />
              )}
            </small>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
