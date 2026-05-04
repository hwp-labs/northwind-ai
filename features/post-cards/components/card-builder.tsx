import { PropsWithChildren } from "react";
import { ChevronRightIcon } from "lucide-react";
import { IconRocket } from "@tabler/icons-react";
import clsx from "clsx";
//
import { Logo, LogoAlt } from "@/components/logo";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { APP } from "@/constants/APP";
import { COPY } from "@/constants/LOCALE";
import {
  PodcastCustomTagEnum,
  PodcastDto,
} from "@/lib/supabase/services/podcasts/types";

interface HeaderProps extends PropsWithChildren {
  item?: PodcastDto;
  flagship?: boolean;
  noBorder?: boolean;
  py4?: boolean;
}

const Header = ({ children, item, flagship, noBorder, py4 }: HeaderProps) => {
  const [img, alt, size]: [string, string | null, number | null] =
    item?.customTag === PodcastCustomTagEnum.BOOKIN
      ? ["/uploads/logos/bookin-lg.png", null, 75]
      : item?.customTag === PodcastCustomTagEnum.VERSE_RADIO
        ? ["/uploads/logos/verse.png", "Verse Radio", null]
        : ["/images/icon-hwp-labs.png", `${APP.owner}&reg;`, null];
  //
  return (
    <header
      className={clsx(
        "flex-row-cb bg-white px-8",
        !noBorder && "border-b border-gray-200",
        children || py4 ? "py-4" : "py-5",
      )}
    >
      {flagship ? <LogoAlt /> : <Logo />}
      {children || (
        <figure className="flex-row-cs debug_ gap-2">
          <img src={img} width={size || 24} alt="" />
          <figcaption
            className="text-[15px] font-medium"
            dangerouslySetInnerHTML={{ __html: alt || "" }}
          />
        </figure>
      )}
    </header>
  );
};

const Footer = ({ children }: PropsWithChildren) => (
  <footer className="absolute bottom-8 w-full px-8">{children}</footer>
);
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  noCover?: boolean;
}

const Container = ({ children, className, noCover }: ContainerProps) => (
  <main
    className={clsx("bg-foreground relative flex-1 overflow-hidden", className)}
  >
    {!noCover && (
      <div className="absolute inset-0 z-1 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat opacity-8 grayscale filter" />
    )}
    {children}
  </main>
);

const Description = ({ className }: { className?: string }) => (
  <article
    className={clsx(
      "debug_ absolute bottom-25 w-full text-center text-[12px] leading-5",
      className,
    )}
  >
    <p>{COPY.transform}</p>
    <p>{COPY.automateRichText}</p>
  </article>
);

const CTA = () => (
  <Footer>
    <div className="flex-row-cb rounded-full bg-black px-8 py-4 text-sm text-white">
      <span className="flex-row-cs gap-2">
        Get started
        <ChevronRightIcon size={16} />
      </span>
      <span className="flex-row-cs gap-2.5">
        <IconRocket size={20} color={APP.colors.contrast} />
        {APP.domain}
      </span>
    </div>
  </Footer>
);

const AvatarGroup_ = ({ src }: { src: string[] }) => {
  return (
    <AvatarGroup className="[&>span]:bg-foreground [&>span]:ring-[#eee]">
      {src.map((item, i) => (
        <Avatar key={i}>
          <AvatarImage src={item} alt="" />
        </Avatar>
      ))}
    </AvatarGroup>
  );
};

export const CardBuilder = {
  Header,
  Footer,
  Container,
  Description,
  CTA,
  AvatarGroup: AvatarGroup_,
};
