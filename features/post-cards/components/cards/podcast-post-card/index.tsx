import { Header, Footer, Main, Venue, Container, Background } from "./builder";
import { Datetime } from "./datetime";
import { Speakers } from "./speakers";
import { Hero } from "./hero";
import { PodcastHelper } from "@/lib/supabase/services/podcasts/helper";

interface Props {
  page?: number;
}

export const PodcastPostCard = ({ page = 1 }: Props) => {
  const item = PodcastHelper.GetPageItem(page);
  const overwriteHero = [7, 8, 9].includes(item?.id) ? item.summary : null;
  const overwriteFooter =
    item?.id === 8 ? (
      <>
        Powered by
        <img src="/uploads/logos/verse.png" alt="" width={20} /> Verse Radio
      </>
    ) : null;
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
          <Hero podcast={item}>{overwriteHero}</Hero>
        </Container>
        <Footer podcast={item}>{overwriteFooter}</Footer>
      </Main>
    </>
  );
};
