import { transformEpisode } from "@/lib/podcast/episodes/utils";
import { CardBuilder } from "../../card-builder";
import { Builder } from "./builder";
import { Card } from "./card";

interface Props {
  page?: number;
}

export const QversePostCard = ({ page = 1 }: Props) => {
  const e1 = transformEpisode(24);
  const e2 = transformEpisode(26);
  const e3 = transformEpisode(26);
  //
  return (
    <>
      <CardBuilder.Header />
      <Builder.Container>
        <Builder.Hero />
        <ul className="mt-4">
          <Card
            {...{
              icon: e1.Speakers[1].avatar,
              name: e1.topic,
              verified: true,
              description: e1.Speakers[1].fullName,
              posted: e1.datetimeShort,
            }}
          />
          <Card
            {...{
              icon: e2.Speakers[1].avatar,
              name: e2.topic,
              verified: true,
              description: e2.Speakers[1].fullName,
              posted: e2.datetimeShort,
            }}
          />
          <Card
            {...{
              icon: e2.Speakers[2].avatar,
              name: e2.topic,
              verified: true,
              description: e2.Speakers[2].fullName,
              posted: e2.datetimeShort,
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
