"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ListHeader } from "./list-header";

export const Guests = () => {
  const [randData, setRandData] = useState(data);
  useEffect(() => {
    setRandData((s) => [...s].sort(() => Math.random() - 0.5));
  }, []);
  //
  return (
    <section className="debug_ max-w-svw">
      <div className="px-5">
        <ListHeader>Featured Guests</ListHeader>
      </div>
      <ul className="scrollbar-hide gap-4_ mt-4 flex snap-x snap-mandatory items-end overflow-x-auto scroll-smooth pb-4">
        {randData.map((item, i) => (
          <li key={i} className="border_ max-w-[100px] min-w-[100px]">
            <figure className="debug3_ flex-col-cc flex-shrink-0 snap-center">
              <Image
                src={item.src}
                alt=""
                width={56}
                height={56}
                className="border-outline size-[56px] rounded-full border-2"
              />
              <figcaption
                className="flex-col-cc debug_ mt-2 cursor-pointer gap-0.5 truncate text-sm"
                onClick={() =>
                  window.open(`https://x.com/${item.username}`, "_blank")
                }
              >
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
    src: "/uploads/podcast/avatar-polalere.png",
    name: "Phillip O.",
    username: "@philstring93",
  },
  {
    src: "/uploads/podcast/avatar-aosawere.png",
    name: "Anthony O.",
    username: "@workofao",
  },
  {
    src: "/images/avatar-etugbeh2.png",
    name: "Emanuel T.",
    username: "@2gbeh",
  },
  {
    src: "/uploads/podcast/avatar-aisaac.jpg",
    name: "Aderoju I.",
    username: "@Aderoju_isaac9",
  },
  {
    src: "/uploads/podcast/avatar-ceffect.jpg",
    name: "Cody E.",
    username: "@CodyEffect",
  },
  {
    src: "/uploads/podcast/avatar-eafiemo.jpg",
    name: "Edafe A.",
    username: "@edafeafiemo",
  },
  {
    src: "/uploads/podcast/avatar-iadebiyi.jpg",
    name: "Isaac A.",
    username: "@theisaacade",
  },
  {
    src: "/uploads/logos/tetra.png",
    name: "Aboyowa O.",
    username: "@OluehAboyowa",
  },
  {
    src: "/uploads/podcast/avatar-juyi.jpg",
    name: "Joshua U.",
    username: "@joshuaouyi",
  },
  {
    src: "/uploads/podcast/avatar-oifeanyi.jpg",
    name: " Oluchi I.",
    username: "@feanyluch",
  },
  {
    src: "/uploads/podcast/avatar-makinbo.jpg",
    name: "Martins A.",
    username: "@sanmiAkinbo",
  },
];
