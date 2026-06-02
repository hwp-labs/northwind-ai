"use client";

import { useRouter } from "next/navigation";
import { IconDotsVertical, IconArrowLeft } from "@tabler/icons-react";
//
import { Logo } from "@/components/logo";
import { IconButton } from "@/components/atoms/icon-button";
import { usePodcastStore } from "@/store/podcastStore";
import { useVisitTracker } from "@/hooks/use-visit-tracker";
import { SearchBar } from "./search-bar";
import { SearchIcon } from "lucide-react";

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
  const toggleSearch = usePodcastStore((s) => s.toggleSearch);

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
      <SearchBar placeholder={search?.placeholder} />
    </header>
  );
};
