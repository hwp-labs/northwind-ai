"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { IconDotsVertical, IconArrowLeft } from "@tabler/icons-react";
import { SearchIcon } from "lucide-react";
//
import { Logo } from "@/components/logo";
import { IconButton } from "@/components/atoms/icon-button";
import { SearchBar } from "./search-bar";
import { usePodcastStore } from "@/store/podcastStore";
import { useVisitTracker } from "@/hooks/use-visit-tracker";

interface Props {
  title?: string;
  backTo?: string;
  noOptions?: boolean;
  search?: { placeholder?: string };
}

export const AppBar = ({ title, backTo, noOptions, search }: Props) => {
  useVisitTracker();

  const router = useRouter();
  const mutateModal = usePodcastStore((s) => s.mutateModal);
  const resetSearch = usePodcastStore((s) => s.resetSearch);
  const toggleSearch = usePodcastStore((s) => s.toggleSearch);

  useEffect(() => {
    if (search) resetSearch();
  }, []);

  const handleBack = () => {
    if (backTo) {
      router.replace(backTo);
      return;
    }
    router.back();
  };

  const handleOptions = () => {
    mutateModal({ open: true, variant: "options" });
  };
  //
  return (
    <header className="bg-background sticky top-0 z-7">
      <div className="flex-row-cb debug_ h-[60px] pr-0 pl-4">
        {title ? (
          <div className="flex-row-cs gap-4">
            <IconButton
              Icon={IconArrowLeft}
              onClick={handleBack}
              title="Back"
              compact
            />
            <h1 className="text-lg font-medium">{title}</h1>
          </div>
        ) : (
          <Logo path="/" />
        )}
        {/* RIGHT SIDE */}
        <div className="flex-row-cs gao-4">
          {search ? (
            <IconButton
              Icon={SearchIcon}
              onClick={toggleSearch}
              title="Search"
            />
          ) : null}
          {noOptions ? null : (
            <IconButton
              Icon={IconDotsVertical}
              onClick={handleOptions}
              title="Options"
            />
          )}
        </div>
      </div>
      {search ? <SearchBar placeholder={search?.placeholder} /> : null}
    </header>
  );
};
