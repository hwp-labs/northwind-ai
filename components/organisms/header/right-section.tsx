"use client";

import { useRouter } from "next/navigation";
import { FaCircleUser, FaBlogger } from "react-icons/fa6";
//
import { Button } from "@/components/shadcn/ui/button";
import { useVisitTracker } from "@/hooks/use-visit-tracker";
import { PATH } from "@/constants/PATH";

export const HeaderRightSection = () => {
  const  router = useRouter();
  useVisitTracker();
  //
  return (
    <div className="flex-row-cs gap-2.5">
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
    </div>
  );
};
