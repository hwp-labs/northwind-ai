import { TransformedEpisodeDto } from "@/lib/supabase/services/podcasts/types";
import { COLOR } from "@/constants/COLOR";
//
import { Builder } from "./builder";

interface Props {
  data: TransformedEpisodeDto;
}

export const PodcastInviteEmail = ({ data }: Props) => {
  return (
    <Builder.Template preview={`LIVE: ${data.datetimeText} WAT`}>
      <Builder.Banner variant="support-podcast" />
      <Builder.H1>{data.titleSeriesText}</Builder.H1>
      <Builder.P richText={data.summaryNobr} />
      <Builder.P>LIVE: {data.datetimeText} WAT</Builder.P>
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
