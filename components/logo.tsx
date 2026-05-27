import Link from "next/link";
import { GpuIcon } from "lucide-react";
import { APP } from "@/constants/APP";
import clsx from "clsx";

interface Props {
  size?: number;
  path?: string;
  iconOnly?: boolean;
}

export const Logo = ({ size, path, iconOnly }: Props) => {
  const renderLogo = (
    <div className="flex-row-cs border_ gap-2">
      <span
        className={clsx(
          "flex-row-cc rounded-full bg-black text-white",
          size ? "p-[10px]" : "size-[24px]",
        )}
      >
        <GpuIcon size={size || 14} />
      </span>
      {!iconOnly && (
        <p className="font-f3 font-semibold text-nowrap">{APP.name}</p>
      )}
    </div>
  );

  return path ? (
    <Link href={path}>{renderLogo}</Link>
  ) : (
    <a href="" title="Reload">
      {renderLogo}
    </a>
  );
};

export const CompanyLogo = () => {
  return (
    <figure className="flex-row-cs gap-2">
      <img src="/images/icon-hwp.png" width={24} alt="" />
      <figcaption className="text-[15px] font-medium">
        {APP.owner}&reg;
      </figcaption>
    </figure>
  );
};
