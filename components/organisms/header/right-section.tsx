"use client";

import { FaCircleUser, FaBlogger } from "react-icons/fa6";
//
import { Button } from "@/components/shadcn/ui/button";
import { RsvpAvatarGroup } from "@/features/podcasts/components/rsvp-avatar-group";
import { useVisitTracker } from "@/hooks/use-visit-tracker";
import { useQueryParams } from "@/hooks/use-query-params";
import { PATH } from "@/constants/PATH";

export const HeaderRightSection = () => {
  useVisitTracker();
  const { router, pathname } = useQueryParams();
  //
  return (
    <div className="flex-row-cs gap-2.5">
      {pathname.startsWith("/podcast/") ? (
        <RsvpAvatarGroup />
      ) : (
        <>
          <Button
            onClick={() => router.push(PATH.podcast)}
            size="icon"
            title="Blog"
            aria-label="Blog"
            className="shadow-lg transition-colors"
          >
            <FaBlogger />
          </Button>
          <Button
            onClick={() => router.push(PATH.login)}
            size="icon"
            title="Log in"
            aria-label="Log in"
            className="shadow-lg transition-colors"
          >
            <FaCircleUser />
          </Button>
        </>
      )}
    </div>
  );
};
