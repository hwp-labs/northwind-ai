import { PropsWithChildren } from "react";
import Image from "next/image";

interface Props extends PropsWithChildren {
  index: number;
  src: string;
}

export const Container = ({ children, index, src }: Props) => {
  return (
    <>
      <figure className="debug_ relative h-[200px] overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt=""
          fill
          priority
          className="opacity-40_ object-cover"
        />
        <figcaption
          className="debug_ absolute z-1 grid size-full px-5"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6), rgba(255,255,255,0))",
          }}
        >
          {children}
        </figcaption>
      </figure>
      <ul className="flex-row-cc mt-4 gap-2 [&_li>div]:size-2 [&_li>div]:rounded-full">
        {Array.from({ length: 3 }).map((_, i) => (
          <li>
            <div className={i === index ? "bg-foreground" : "bg-border"} />
          </li>
        ))}
      </ul>
    </>
  );
};
