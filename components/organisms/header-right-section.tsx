"use client";

import Link from "next/link";
import { LogInIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { RsvpAvatarGroup } from "@/features/podcasts/components/card/rsvp-avatar-group";
import { useVisitTracker } from "@/hooks/use-visit-tracker";
import { useQueryParams } from "@/hooks/use-query-params";
import { PATH } from "@/constants/PATH";

export const HeaderRightSection = () => {
  useVisitTracker();
  const { router, pathname, getSlugId } = useQueryParams();
  const id = getSlugId();
  //
  return (
    <div className="flex-row-cs gap-4">
      {pathname.startsWith("/podcast") ? (
        <RsvpAvatarGroup podcast_id={id} />
      ) : (
        <Button
          onClick={() => router.push(PATH.login)}
          size="icon"
          title="Log in"
          aria-label="Log in"
          className="shadow-lg transition-colors"
        >
          <LogInIcon size={14} />
        </Button>
      )}
    </div>
  );
};
