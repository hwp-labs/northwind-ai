import { transformEpisode } from "@/lib/podcast/episodes/utils";
import { CardBuilder } from "../../card-builder";
import { Builder } from "./builder";
import { Card } from "./card";

interface Props {
  page?: number;
}

export const QversePostCard = ({ page = 1 }: Props) => {
  const e1 = transformEpisode(18);
  const e2 = transformEpisode(19);
  const e3 = transformEpisode(19);
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
              _name: e1.topic,
              name: "Pragmatics & Cryptography",
              verified: true,
              description: e1.Speakers[1].fullName,
              followers: 244,
              posted: e1.datetimeShort,
            }}
          />
          <Card
            {...{
              icon: e2.Speakers[1].avatar,
              _name: e2.topic,
              name: "SOW: Govt Subcontractors",
              verified: true,
              description: e2.Speakers[1].fullName,
              followers: 57,
              posted: e2.datetimeShort,
            }}
          />
          <Card
            {...{
              icon: e2.Speakers[2].avatar,
              _name: e2.topic,
              name: "SOW: Govt Subcontractors",
              verified: true,
              description: e2.Speakers[2].fullName,
              followers: 57,
              posted: e2.datetimeShort,
            }}
          />
          {/* <Card
            {...{
              icon: e3.Speakers[0].avatar,
              _name: (
                <>
                  {e3.topic}
                  <br />
                  at OnlyFans
                </>
              ),
              name: e3.topic,
              verified: true,
              description: e3.Speakers[0].displayName,
              followers: 86,
              posted: e3.datetimeShort,
            }}
          /> */}
        </ul>
        {/* <Builder.Event date="Sunday, May 3rd" /> */}
        <section className="flex-row-ce -mt-10">
          {/* <Builder.Address /> */}
          <Builder.CtaBtn />
        </section>
      </Builder.Container>
    </>
  );
};
