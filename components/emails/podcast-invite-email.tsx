import { TransformedEpisode } from "@/lib/podcast/episodes/utils";
import { COLOR } from "@/constants/COLOR";
//
import { Builder } from "./builder";

interface Props {
  data: TransformedEpisode;
}

export const PodcastInviteEmail = ({ data }: Props) => {
  return (
    <Builder.Template preview={`LIVE: ${data.datetimeShort} WAT`}>
      <Builder.Banner variant="support-podcast" />
      <Builder.H1>{data.topic}</Builder.H1>
      {data.summary ? <Builder.P>{data.summary}</Builder.P> : null}
      <Builder.P>LIVE: {data.datetimeShort} WAT</Builder.P>
      <Builder.Button href={data.spaceUrl!} color={COLOR.barbie}>
        Listen Now
      </Builder.Button>
      <Builder.P>
        Or join using the URL below: <br />
        <Builder.Link href={data.spaceUrl!} />
      </Builder.P>
    </Builder.Template>
  );
};
