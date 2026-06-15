import clsx from "clsx";
import {
  IconRosetteDiscountCheckFilled,
  IconStarFilled,
  IconStar,
} from "@tabler/icons-react";
import { classNames } from "./builder";

interface Props {
  icon: string;
  _name?: React.ReactNode;
  name: React.ReactNode;
  description?: string;
  verified?: boolean;
  followers?: number;
  rating?: number;
  posted: string;
}

export const Card = ({
  icon,
  name,
  description,
  rating,
  posted,
  verified,
}: Props) => (
  <li className="debug_ border-foreground/15 w-70 border-t px-2 py-3">
    <figure className="flex-row-sx gap-4 text-xs">
      <div className="relative">
        {renderAvatar(icon)}
        {verified && renderVerifiedBadge}
      </div>
      <figcaption>
        <div
          className="debug_ min-h-5 w-47 leading-4 line-clamp-2"
          style={{ textShadow: "-1px 1px 1px #111" }}
        >
          <b>{name}</b>
          {description ? (
            <>
              {" "}
              - <span dangerouslySetInnerHTML={{ __html: description }} />
            </>
          ) : null}
        </div>
        <div className="flex-row-cs mt-1 gap-1.5">
          {rating ? (
            <>
              {renderRatings(rating)}
              &bull;
            </>
          ) : null}
          <span
            className="text-foreground/80"
            style={{ textShadow: "-1px 1px 1px #111" }}
          >
            {posted}
          </span>
        </div>
      </figcaption>
    </figure>
  </li>
);

const renderAvatar = (src: string, size = 48) => (
  <div
    className={clsx("rounded-full p-0.5", classNames.whiteGradient)}
    style={{ minHeight: size, maxHeight: size, minWidth: size, maxWidth: size }}
  >
    <img src={src} className="rounded-full" width={size} alt="" />
  </div>
);

const renderVerifiedBadge = (
  <div className="absolute -right-0.5 bottom-0 rounded-full bg-white">
    <IconRosetteDiscountCheckFilled size={16} className="text-blue-500" />
  </div>
);

const renderRatings = (rating: number) => (
  <ol className="flex-row-cs gap-1">
    {Array.from({ length: 5 }).map((_, i) => {
      const Icon = i < rating ? IconStarFilled : IconStar;
      return (
        <li key={i}>
          <Icon size={12} className="text-amber-300" />
        </li>
      );
    })}
  </ol>
);
