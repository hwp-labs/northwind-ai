import {
  IconBrandWhatsapp,
  IconBrandX,
  IconLinkOff,
} from "@tabler/icons-react";
import { AnchorOutbound } from "@/components/atoms/anchor";
import { SpeakerDto } from "@/lib/podcast/speakers/types";

interface Props {
  speaker: SpeakerDto;
}

export const CtaButtons = ({ speaker }: Props) => {
  return (
    <div className="flex-row-cs gap-4">
      <AnchorOutbound
        title="WhatsApp"
        href={
          speaker.tel
            ? `https://wa.me/${speaker.tel.replace("+", "")}`
            : undefined
        }
        className="list-cta-btn size-[32px]"
      >
        {speaker.tel ? (
          <IconBrandWhatsapp size={18} />
        ) : (
          <IconLinkOff size={16} strokeWidth={2.5} />
        )}
      </AnchorOutbound>
      <AnchorOutbound
        title="Twitter"
        href={`https://x.com/${speaker.socials.x}`}
        className="list-cta-btn size-[32px]"
      >
        <IconBrandX size={15} />
      </AnchorOutbound>
    </div>
  );
};
