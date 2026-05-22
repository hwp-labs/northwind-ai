"use client";

import { useRouter } from "next/navigation";
import { type LucideIcon } from "lucide-react";
import clsx from "clsx";

interface Props {
  Icon: LucideIcon;
  title?: string;
  path?: string;
  onClick?: () => void;
  size?: number;
  compact?: boolean;
  surface?: boolean;
  debug?: boolean;
}

export const LucideIconButton = ({
  Icon,
  title,
  path,
  onClick,
  size = 24,
  compact,
  surface,
  debug,
}: Props) => {
  const router = useRouter();
  const handleClick = () => {
    if (path) router.push(path);
    if (onClick) onClick();
  };
  //
  return (
    <button
      title={title}
      onClick={handleClick}
      className={clsx(
        "flex-row-cc cursor-pointer",
        compact ? "" : "size-[48px]",
        surface && "bg-muted rounded-lg",
        debug && "debug",
      )}
    >
      <Icon size={surface ? 20 : size} strokeWidth={2.5} />
    </button>
  );
};
