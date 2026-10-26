import { transformEpisode } from "@/lib/podcast/episodes/utils";
import { CardBuilder } from "../../card-builder";
import { Builder } from "./builder";
import { Card } from "./card";

interface Props {
  page?: number;
}

export const QversePostCard = ({ page = 1 }: Props) => {
  //
  return (
    <>
      <CardBuilder.Header />
      <Builder.Container>
        <Builder.Hero />
        <ul className="mt-4 flex flex-col items-start">
          <Card
         {...{
              icon: "/uploads/podcast/avatar-aalebiowu.jpg",
              name: "Health Ed Policies & Promotion",
              description: "Ayomide Alebiowu",
              posted: "Sun, 1 Nov 2026 | 7PM",
              verified: true,
            }}
          />
          <Card
            {...{
              icon: "/uploads/podcast/avatar-eokene.jpg",
              name: "Health Ed Policies & Promotion",
              description: "Emmanuel Okene",
              posted: "Sun, 1 Nov 2026 | 7PM",
              verified: true,
            }}
          />
          <Card
            {...{
              icon: "/uploads/podcast/avatar-aosawere.png",
              name: "Open-source Software & Licensing",
              description: "Anthony Osawere",
              posted: "Sun, 8 Nov 2026 | 7PM",
              verified: true,
            }}
          />
        </ul>
        <section className="flex-row-ce -mt-10">
          <Builder.CtaBtn />
        </section>
      </Builder.Container>
    </>
  );
};
