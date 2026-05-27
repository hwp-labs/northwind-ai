import { IconCircleCheckFilled } from "@tabler/icons-react";
//
import { CardBuilder } from "../../card-builder";
import { APP } from "@/constants/APP";
import data from "./data.json";

interface Data {
  icon: string;
  label: string;
  value: string[];
}

interface Props {
  page?: number;
}

export const FAQPostCard = ({ page = 1 }: Props) => {
  const i = page - 1;
  const item = (data[i] || data[0]) as Data;
  //
  return (
    <>
      <CardBuilder.Header />
      <CardBuilder.Container className="debug_">
        <section className="debug_ flex-row-cc relative z-2 size-[430px] w-full">
          <div className="grid max-w-sm gap-2 rounded-2xl bg-white pt-6 pb-6 shadow-2xl">
            <figure className="grid gap-4">
              <div className="mx-auto_ flex-row-cc relative h-[80px]">
                <img
                  src={`/uploads/faq/${item.icon}`}
                  alt=""
                  className="block max-h-full max-w-full object-contain"
                />
              </div>
              <figcaption className="text-md font-f3 text-center leading-[22px] font-bold tracking-wide">
                How can {APP.name} help automate{" "}
                <span className="inline-block">{item.label}</span>?
              </figcaption>
            </figure>
            <ul className="grid gap-2.5 px-6">
              {item.value
                .filter((text) => !text.startsWith("#"))
                .map((text, i) => (
                  <li key={i} className="flex gap-2.5 text-[13px] font-normal">
                    <i className="min-w-[16px] pt-0.5">
                      <IconCircleCheckFilled
                        size={16}
                        color={APP.colors.brand}
                      />
                    </i>
                    {text}
                  </li>
                ))}
            </ul>
          </div>
        </section>
        <CardBuilder.Description />
        <CardBuilder.CTA />
      </CardBuilder.Container>
    </>
  );
};
