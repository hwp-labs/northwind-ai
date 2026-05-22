import Link from "next/link";
import { PropsWithChildren } from "react";
import { ChevronRightIcon } from "lucide-react";

interface Props extends PropsWithChildren {
  path?: string;
}

export const ListHeader = ({ children, path = "#list-header" }: Props) => {
  return (
    <div className="flex-row-cb" id="list-header">
      <strong className="text-lg">{children}</strong>
      <Link href={path} className="flex-row-cs gap-1">
        See all
        <ChevronRightIcon size={20} strokeWidth={2.5} />
      </Link>
    </div>
  );
};
