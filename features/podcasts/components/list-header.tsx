import Link from "next/link";
import { PropsWithChildren } from "react";
import { ChevronRightIcon } from "lucide-react";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  path?: string;
  className?: string;
}

export const ListHeader = ({ children, path, className }: Props) => {
  return (
    <div className={clsx("flex-row-cb text-sm", className)}>
      <strong className="">{children}</strong>
      {path ? (
        <Link href={path} className="flex-row-cs gap-1">
          See all
          <ChevronRightIcon size={20} strokeWidth={2.5} />
        </Link>
      ) : null}
    </div>
  );
};
