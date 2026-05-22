import Image from "next/image";
import { ListHeader } from "./list-header";

export const Guests = () => {
  return (
    <section className="debug debug max-w-svw">
    <div className="px-5">
      <ListHeader>Previous Guests</ListHeader>
    </div>
      <ul className="scrollbar-hide mt-4 flex snap-x snap-mandatory gap-4_ overflow-x-auto scroll-smooth pb-4 items-end">
        {data.map((item, i) => (
          <li key={i} className="border_ min-w-[120px] max-w-[120px]">
            <figure className="debug3 flex-col-cc flex-shrink-0 snap-center">
              <Image
                src={item.src}
                alt=""
                width={56}
                height={56}
                className="rounded-full border-2 border-foreground"
              />
              <figcaption className="flex-col-cc mt-4 gap-0.5 truncate text-sm">
                <strong className="text-white">{item.name}</strong>
                <small>{item.username}</small>
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
