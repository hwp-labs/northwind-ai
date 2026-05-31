import clsx from "clsx";

interface Props {
  topic: string;
  _topic?: any;
  variant: "hero" | "list" | "preview" | "snap";
}

export const Topic = ({ topic, variant }: Props) => {
  if (variant === "snap")
    return (
      <h1 className="font-f3 pr-4 text-[36px] leading-[40px] font-semibold tracking-wide text-white">
        {topic}
      </h1>
    );

  return (
    <strong
      className={clsx(
        variant === "hero" &&
          "font-f4 text-[26px] leading-[28px] font-medium tracking-[3px]",
        variant === "list" && "line-clamp-2 min-h-[25px] text-white",
        variant === "preview" && "text-center text-lg text-white",
      )}
    >{topic}</strong>
  );
};
