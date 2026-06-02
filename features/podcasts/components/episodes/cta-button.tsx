import { AnchorOutbound } from "@/components/atoms/anchor";
import { TransformedEpisode } from "@/lib/podcast/episodes/utils";
import { IconPlayerPlayFilled, IconLinkOff } from "@tabler/icons-react";

interface Props {
  episode: TransformedEpisode;
}

export const CtaButton = ({ episode }: Props) => {
  return (
    <AnchorOutbound
      href={episode.canPlay ? episode.spaceUrl : undefined}
      className="bg-secondary flex-row-cc size-[40px] rounded-full"
    >
      {episode.canPlay ? (
        <IconPlayerPlayFilled size={18} />
      ) : (
        <IconLinkOff size={18} strokeWidth={2.5} />
      )}
    </AnchorOutbound>
  );
};
