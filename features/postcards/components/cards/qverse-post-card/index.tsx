import { transformEpisode } from "@/lib/podcast/episodes/utils";
import { CardBuilder } from "../../card-builder";
import { Builder } from "./builder";
import { Card } from "./card";

interface Props {
  page?: number;
}

export const QversePostCard = ({ page = 1 }: Props) => {
  const e1 = transformEpisode(22);
  const e2 = transformEpisode(23);
  const e3 = transformEpisode(25);
  //
  return (
    <>
      <CardBuilder.Header />
      <Builder.Container>
        <Builder.Hero />
        <ul className="mt-4">
          <Card
            {...{
              icon: e1.Speakers[0].avatar,
              name: e1.topic,
              verified: true,
              description: e1.Speakers[0].fullName,
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
              icon: '/uploads/podcast/avatar-vogundowo.png',
              name: 'Smart EduSphere Design Session',
              verified: true,
              description: 'Victor Ogundowo',
              posted: 'Sun, 19 Jul 2026 | 8PM',
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
