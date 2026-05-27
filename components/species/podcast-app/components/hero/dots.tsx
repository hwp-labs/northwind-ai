import clsx from "clsx";

export const Dots = ({ selected }: { selected?: number }) => {
  return (
    <ul className="flex-row-cc mt-4 gap-2 [&_li>div]:size-2 [&_li>div]:rounded-full">
      {Array.from({ length: 3 }).map((_, i) => (
        <li key={i}>
          <div
            className={clsx(
              "bg-border transition-all duration-300",
              i === selected && "bg-foreground!",
            )}
          />
        </li>
      ))}
    </ul>
  );
};
