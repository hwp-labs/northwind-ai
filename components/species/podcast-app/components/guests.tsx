"use client";

import Image from "next/image";
import { ListHeader } from "./list-header";

export const Guests = () => {
  return (
    <section className="debug_ max-w-svw">
      <div className="px-5">
        <ListHeader>Featured Guests</ListHeader>
      </div>
      <ul className="scrollbar-hide gap-4_ mt-4 flex snap-x snap-mandatory items-end overflow-x-auto scroll-smooth pb-4">
        {data.map((item, i) => (
          <li key={i} className="border_ max-w-[100px] min-w-[100px]">
            <figure
              className="debug3_ flex-col-cc flex-shrink-0 snap-center cursor-pointer"
              onClick={() =>
                window.open(`https://x.com/${item.username}`, "_blank")
              }
            >
              <Image
                src={item.src}
                alt=""
                width={56}
                height={56}
                className="border-outline size-[56px] rounded-full border-2"
              />
              <figcaption className="flex-col-cc mt-2 gap-0.5 truncate text-sm">
                <strong className="text-white">{item.name}</strong>
                {/* <small>{item.username}</small> */}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};

const data = [
  {
    src: "/uploads/logos/grab.png",
    name: "Grab",
    username: "@InsideGrab",
  },
  {
    src: "/uploads/logos/adiz.png",
    name: "Isaac A.",
    username: "@theisaacade",
  },
  {
    src: "/uploads/logos/tetra.png",
    name: "Aboyowa O.",
    username: "@OluehAboyowa",
  },
  {
    src: "/uploads/logos/izivote.png",
    name: "Joshua U.",
    username: "@joshuaouyi",
  },
  {
    src: "/uploads/logos/bookin.png",
    name: " Oluchi I.",
    username: "@feanyluch",
  },
  {
    src: "/uploads/logos/scupex.png",
    name: "Martins A.",
    username: "@sanmiAkinbo",
  },
];
