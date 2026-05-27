import { Item } from "./item";

interface Props {
  title: string;
  data?: Record<string, number>;
}

export const GeolocationChart = ({ title, data = {} }: Props) => {
  const total = Object.values(data).reduce((prev, value) => prev + value, 0);
  //
  return (
    <section className="bg-card rounded-2xl px-6 py-5 shadow-2xl">
      <strong className="text-lg">{title}</strong>
      <ul className="mt-4 space-y-4">
        {Object.entries(data).map(([label, value], i) => {
          const src = `/uploads/podcast/flag-${label.toLowerCase()}.webp`;
          const width = Math.round((value * 100) / total) + "%";
          //
          return (
            <li key={i} className="flex-row-cb gap-4">
              <figure className="flex-row-cs gap-4">
                <img src={src} width={24} alt="" />
                <figcaption className="font-medium">{label}</figcaption>
              </figure>
              <ol className="h-2 flex-1 overflow-clip rounded-full bg-[#00bc7d26]">
                <li
                  className="h-2 rounded-full bg-[#00bc7d]"
                  style={{ width }}
                ></li>
              </ol>
              <strong>{width}</strong>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
