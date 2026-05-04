import { CardBuilder } from "../../card-builder";
import { Builder } from "./builder";
import { Card } from "./card";

interface Props {
  page?: number;
}

export const QversePostCard = ({ page = 1 }: Props) => {
  return (
    <>
      <CardBuilder.Header py4 />
      <Builder.Container>
        <Builder.Hero />
        <ul className="mt-1">
          <Card
            {...{
              icon: "/uploads/logos/snapp-quest.png",
              name: "SnappQuest",
              description: "Turning passive audiences into active ecosystems",
              followers: 244,
              rating: 4,
              posted: "Just now",
            }}
          />
          <Card
            {...{
              icon: "/uploads/logos/zela.png",
              name: "Zela Pay",
              description:
                "Money Knows your Number.<br/> A self Banking gateway built on Solana",
              verified: true,
              followers: 57,
              rating: 4,
              posted: "1h ago",
            }}
          />
          <Card
            {...{
              icon: "/uploads/logos/surfcash.png",
              name: "SurfCash NG",
              description: "Your local bank on Solana",
              verified: true,
              followers: 86,
              rating: 4,
              posted: "3d ago",
            }}
          />
        </ul>
        {/* <Builder.Event date="Sunday, May 3rd" /> */}
        <section className="flex-row-eb -mt-4">
          <Builder.Address />
          <Builder.CtaBtn />
        </section>
      </Builder.Container>
    </>
  );
};
