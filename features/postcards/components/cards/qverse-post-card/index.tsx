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
              icon: "/uploads/podcast/avatar-cking.jpg",
              name: "Catalyzing Sustainable Economic Growth",
              description: "Chinemerem King",
              posted: "Sun, 25 Oct 2026 | 7PM",
              verified: true,
            }}
          />
          <Card
            {...{
              icon: "/uploads/podcast/avatar-kenajuke.jpg",
              name: "GRC - Governance, Risk & Compliance",
              description: "Kenneth Enajuke",
              posted: "Sun, 1 Nov 2026 | 7PM",
            }}
          />
          <Card
            {...{
              icon: "/uploads/podcast/avatar-toluwawemimo.png",
              name: "Scrum Ceremonies, Jollof Rice & Beans",
              description: "Tolulope Oluwawemimo",
              posted: "Sun, 8 Nov 2026 | 7PM",
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
