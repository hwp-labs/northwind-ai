import { PropsWithChildren } from "react";
import clsx from "clsx";
import { CompanyLogo, Logo } from "@/components/logo";
import { AvatarGroup } from "@/components/atoms/avatar-builder";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import { AnchorOutbound } from "@/components/atoms/anchor";
import { PodcastV2 } from "@/lib/supabase/services/podcasts/data-v2";

interface Props extends PropsWithChildren {
  podcast: PodcastV2;
}

export const Header = ({ children, podcast }: Props) => {
  const avatars = podcast?.avatars || [];
  const renderRightSection = avatars.length ? (
    <AvatarGroup className="[&>span]:bg-foreground [&>span]:ring-[#eee]">
      {avatars.map((item, i) => (
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
        "flex-row-cb bg-white px-8",
        "border-b border-gray-200",
        "py-4",
      )}
    >
      <Logo />
      {children || renderRightSection}
    </header>
  );
};

export const Footer = ({ children, podcast }: Props) => {
  return (
    <footer className="absolute right-8 bottom-5 z-1">
      <AnchorOutbound
        href={podcast.notionUrl || "#"}
        className="flex-row-cs text-foreground _debug gap-2 text-xs font-medium"
      >
        {children || (
          <>
            Powered by
            <img src="/uploads/logos/notion.png" alt="" width={20} /> Notion
          </>
        )}
      </AnchorOutbound>
    </footer>
  );
};
