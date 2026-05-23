import { PropsWithChildren } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IconWorldUpload } from "@tabler/icons-react";
import clsx from "clsx";
//
import { CompanyLogo, Logo } from "@/components/logo";
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import { AnchorOutbound } from "@/components/atoms/anchor";
import { TransformedPodcastDto } from "@/lib/supabase/services/podcasts/types";
import { APP } from "@/constants/APP";

interface Props extends PropsWithChildren {
  podcast?: TransformedPodcastDto;
}

export const Header = ({ children, podcast }: Props) => {
  const renderRightSection = podcast?.displayAvatars ? (
    <AvatarGroup
      count={podcast.displayAvatars.length - 3}
      className="[&>span]:bg-foreground [&>span]:ring-[#eee]"
      countClassName="invert"
    >
      {podcast.displayAvatars.slice(0, 3).map((item, i) => (
        <Avatar key={i}>
          <AvatarImage src={item} alt="" />
        </Avatar>
      ))}
    </AvatarGroup>
  ) : (
    <CompanyLogo />
  );
  //
  return (
    <header
      className={clsx(
        "flex-row-cb h-[58px] bg-white px-8",
        "border-b border-gray-200",
      )}
    >
      <Logo />
      {children || renderRightSection}
    </header>
  );
};

export const Main = ({ children }: Props) => {
  return (
    <main className="bg-foreground relative flex-1 overflow-hidden">
      <div className="absolute inset-0 z-1 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat opacity-8 grayscale filter" />
      {children}
    </main>
  );
};

export const Footer = ({ children, podcast }: Props) => {
  return (
    <footer className="absolute right-8 bottom-5 z-1">
      <AnchorOutbound
        href={podcast?.notionUrl || "#"}
        className="flex-row-cs text-foreground _debug gap-2 text-xs font-medium"
        style={{ textShadow: "-1px 1px 1px black" }}
      >
        {children || (
          <>
            Powered by
            <img src="/images/icon-notion.png" alt="" width={20} /> Notion
          </>
        )}
      </AnchorOutbound>
    </footer>
  );
};

export const Container = ({ children }: Props) => {
  return <div className="debug_ absolute bottom-14 left-8 z-1">{children}</div>;
};

export const Background = ({ children, podcast }: Props) => {
  const isFiresideChat = podcast?.series === "fc";
  //
  return (
    children || (
      <img
        src={podcast?.cover}
        alt=""
        className={clsx(
          "absolute size-full object-cover object-top-right",
          isFiresideChat && "object-top-left!",
        )}
      />
    )
  );
};

export const Venue = ({ podcast }: Props) => {
  return (
    <div className="flex-col-sc ml-8">
      <div className="text-foreground flex-row-cs bg-podcast ml-7 -rotate-3 gap-1.5 px-4 py-2 text-sm font-black tracking-wide">
        <FaMapMarkerAlt size={14} />
        Twitter_X Spaces
      </div>
      <div className="flex-row-cs -mt-0 -rotate-3 gap-1.5 bg-[#fb085a] px-4 py-2 text-white">
        <IconWorldUpload size={16} />
        <AnchorOutbound
          href={`/podcast/${podcast?.id}`}
          className="_underline font-[Raleway] text-xs font-bold tracking-[1px] underline-offset-2"
        >
          {APP.domain}/podcast/{podcast?.id}
        </AnchorOutbound>
      </div>
    </div>
  );
};
