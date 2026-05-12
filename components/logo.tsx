import Link from "next/link";
import { GpuIcon } from "lucide-react";
import { APP } from "@/constants/APP";

interface Props {
  path?: string;
  iconOnly?: boolean;
}

export const Logo = ({ path, iconOnly }: Props) => {
  const renderLogo = (
    <div className="flex-row-cs border_ gap-2">
      <span className="flex-row-cc size-[24px] rounded-full bg-black text-white">
        <GpuIcon size={14} />
      </span>
      {!iconOnly && (
        <p className="font-[Raleway] font-semibold text-nowrap">{APP.name}</p>
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
      <img src="/images/icon-hwp-labs.png" width={24} alt="" />
      <figcaption className="text-[15px] font-medium">
        {APP.owner}&reg;
      </figcaption>
    </figure>
  );
};
