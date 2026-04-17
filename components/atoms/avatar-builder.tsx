import clsx from "clsx";

interface AvatarWithBadge {
  children: React.ReactNode;
  online?: boolean;
}

export const AvatarWithBadge = ({
  children,
  online = true,
}: AvatarWithBadge) => {
  return (
    <div className="relative inline-block">
      {children}
      <span
        className={clsx(
          "absolute right-0 bottom-0 h-3 w-3 rounded-full ring-2 ring-white",
          online ? "bg-emerald-500" : "bg-rose-500",
        )}
      />
    </div>
  );
};

interface AvatarGroupProps {
  children: React.ReactNode;
  size?: 24 | 32 | 48;
  count?: number;
  className?: string;
  countClassName?: string;
}

export const AvatarGroup = ({
  children,
  size = 32,
  count,
  className,
  countClassName,
}: AvatarGroupProps) => {
  return (
    <div
      className={clsx(
        "[&>span]:bg-background flex -space-x-1.5 [&>span]:ring-2 [&>span]:ring-[#000]",
        {
          "[&>span]:size-[24px]": size === 24,
          "[&>span]:size-[32px]": size === 32,
          "[&>span]:size-[48px]": size === 48,
        },
        className,
      )}
    >
      {children}
      {count ? (
        <div
          className={clsx(
            "flex-row-cc bg-background z-1 rounded-full text-xs font-medium text-[#ccc] ring-1 ring-[#000]",
            {
              "size-[24px]": size === 24,
              "size-[32px]": size === 32,
              "size-[48px]": size === 48,
            },
            countClassName,
          )}
        >
          +{count}
        </div>
      ) : null}
    </div>
  );
};