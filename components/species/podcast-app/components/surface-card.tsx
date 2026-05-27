import { PropsWithChildren } from "react";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  className?: string;
}

export const SurfaceCard = ({ children, className }: Props) => {
  return (
    <div
      className={clsx("bg-card rounded-2xl px-6 py-5 shadow-2xl", className)}
    >
      {children}
    </div>
  );
};
