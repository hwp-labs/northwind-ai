"use client";

import Link from "next/link";
import { LogInIcon } from "lucide-react";
//
import { Logo } from "../logo";
import { RsvpAvatarGroup } from "@/features/podcasts/components/card/rsvp-avatar-group";
import { useVisitTracker } from "@/hooks/use-visit-tracker";
import { PATH } from "@/constants/PATH";
import { useQueryParams } from "@/hooks/use-query-params";

export const Header = () => {
  const { pathname, getSlugId } = useQueryParams();
  const id = Number(getSlugId());
  useVisitTracker();
  //
  return (
    <header className="flex-row-cb debug_ p-6 lg:p-8">
      <Logo path={PATH.home} />
      <div className="flex-row-cs gap-4">
        {pathname.startsWith("/podcast/") ? (
          <RsvpAvatarGroup podcast_id={id} />
        ) : (
          <Link href={PATH.login} title="Log in">
            <LogInIcon size={18} strokeWidth={3} />
          </Link>
        )}
      </div>
    </header>
  );
};
