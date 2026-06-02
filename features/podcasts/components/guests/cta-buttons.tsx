import {
  IconBrandWhatsapp,
  IconBrandX,
  IconLinkOff,
} from "@tabler/icons-react";
import { AnchorOutbound } from "@/components/atoms/anchor";
import { TransformedSpeaker } from "@/lib/podcast/speakers/utils";

interface Props {
  speaker: TransformedSpeaker;
}

export const CtaButtons = ({ speaker }: Props) => {
  return (
    <div className="flex-row-cs gap-4">
      <AnchorOutbound
        href={
          speaker.tel
            ? `https://wa.me/${speaker.tel.replace("+", "")}`
            : undefined
        }
        className="bg-secondary flex-row-cc size-[32px] rounded-full"
      >
        {speaker.tel ? (
          <IconBrandWhatsapp size={18} />
        ) : (
          <IconLinkOff size={16} strokeWidth={2.5} />
        )}
      </AnchorOutbound>
      <AnchorOutbound
        href={`https://x.com/${speaker.socials.x}`}
        className="bg-secondary flex-row-cc size-[32px] rounded-full"
      >
        <IconBrandX size={15} />
      </AnchorOutbound>
    </div>
  );
};
