import { TransformedEpisode } from "@/lib/podcast/episodes/utils";
import { APP_PODCAST } from "@/constants/APP_PODCAST";
import { COLOR } from "@/constants/COLOR";
//
import { Builder } from "./builder";

interface Props {
  data: TransformedEpisode;
}

export const PodcastInviteEmail = ({ data }: Props) => {
  return (
    <Builder.Template
      preview={`LIVE: ${data.datetimeShort} WAT`}
      unsubscribe={{
        href: `${APP_PODCAST.unsubscribeUrl}?unsub=true`,
        text: `Unsubscribe (Don't do it, bro 👀)`,
      }}
    >
      <Builder.Banner variant="support-podcast" />
      <Builder.H1>{data.topic}</Builder.H1>
      {data.summary ? <Builder.P>{data.summary}</Builder.P> : null}
      <Builder.P>LIVE: {data.datetimeShort} WAT</Builder.P>
      <Builder.Button href={data.virtualLink!} color={COLOR.barbie}>
        Listen Now
      </Builder.Button>
      <Builder.P>
        Or join using the URL below: <br />
        <Builder.Link href={data.virtualLink!} />
      </Builder.P>
    </Builder.Template>
  );
};
