import { Header, Footer, Main, Venue, Container, Background } from "./builder";
import { data } from "@/lib/supabase/services/podcasts/data-v2";
import { Datetime } from "./datetime";
import { Speakers } from "./speakers";
import { HeroDesignSession } from "./hero";

interface Props {
  page?: number;
}

export const PodcastV2PostCard = ({ page = 1 }: Props) => {
  const item = data[0];
  //
  return (
    <>
      <Header podcast={item} />
      <Main podcast={item}>
        <Background podcast={item} />
        <Container>
          <Datetime podcast={item} />
          <Venue podcast={item} />
          <Speakers podcast={item} />
          {item.series === "ds" ? <HeroDesignSession podcast={item} /> : null}
        </Container>
        <Footer podcast={item} />
      </Main>
    </>
  );
};
