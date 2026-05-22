"use client";

import { useRouter } from "next/navigation";
import { type LucideIcon } from "lucide-react";
import clsx from "clsx";

interface IconButtonProps {
  Icon: LucideIcon;
  title?: string;
  path?: string;
  onClick?: () => void;
  surface?: boolean;
}

export const LucideIconButton = ({
  Icon,
  title,
  path,
  onClick,
  surface,
}: IconButtonProps) => {
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
        "debug_ flex-row-cc size-[48px] cursor-pointer",
        surface && "bg-muted rounded-lg",
      )}
    >
      <Icon size={surface ? 20 : 24} strokeWidth={2.5} />
    </button>
  );
};
