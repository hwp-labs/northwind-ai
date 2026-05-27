import { PropsWithChildren } from "react";
import Image from "next/image";

interface Props extends PropsWithChildren {
  src: string;
}

export const Card = ({ children, src }: Props) => {
  return (
    <figure className="debug_ relative min-h-[200px] sm:min-h-[250px] overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt=""
        fill
        priority
        className="opacity-40_ object-cover"
      />
      <figcaption
        className="debug_ absolute z-1 grid size-full px-5 sm:px-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6), rgba(255,255,255,0))",
        }}
      >
        {children}
      </figcaption>
    </figure>
  );
};
