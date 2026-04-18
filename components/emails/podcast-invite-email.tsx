import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
//
import { TransformedPodcastDto } from "@/lib/supabase/services/podcasts/types";
import { APP } from "@/constants/APP";
import { COPY } from "@/constants/LOCALE";

interface Props {
  data: TransformedPodcastDto;
}

export const PodcastInviteEmail = ({ data }: Props) => {
  return (
    <Html>
      <Head />
      <Preview>LIVE: {data.datetimeText} WAT</Preview>
      <Tailwind>
        <Body className="bg-background text-foreground m-auto font-sans">
          <Container className="mx-auto mb-10 max-w-[465px] p-5">
            <Heading
              className="_text-center mx-0 my-8 p-0 font-semibold text-white"
              style={{ fontSize: 24 }}
            >
              {data.titleSeriesText}
            </Heading>
            <Text
              className="text-start leading-relaxed"
              style={{ fontSize: 16 }}
            >
              {data.richTextLine1}
              <br />
              {data.richTextLine2}
            </Text>
            <Text
              className="text-start leading-relaxed"
              style={{ fontSize: 16 }}
            >
              LIVE: {data.datetimeText} WAT
            </Text>
            <Section className="">
              <a
                href={data.spaceUrl || "#"}
                style={{
                  color: "white",
                  backgroundColor: "#D946EF",
                  borderRadius: 8,
                  padding: 8,
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "block",
                }}
              >
                Join Now
              </a>
            </Section>
            <Text
              className="text-start leading-relaxed"
              style={{ fontSize: 16 }}
            >
              Or join using the URL below: <br />
              <a
                href={data.spaceUrl || "#"}
                className="text-brand underline underline-offset-2"
              >
                {data.spaceUrl}
              </a>
            </Text>
            <Section className="">
              <Text
                className="text-start leading-relaxed"
                style={{ fontSize: "16px" }}
              >
                Cheers,
                <br />
                EMANUEL
                <br />
                AI Product Engineer, {APP.owner}
                <br />
                {APP.telDisplayText}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
