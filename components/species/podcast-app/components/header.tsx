"use client";

import { IconCategoryPlus, IconChevronLeft } from "@tabler/icons-react";
import { Logo } from "@/components/logo";
import { IconButton } from "@/components/atoms/icon-button";
import { SearchBar } from "./search-bar";
import { usePodcastSearchbarStore } from "@/store/podcastSearchbarStore";
import { useRouter } from "next/navigation";

interface Props {
  title?: string;
  fromPath?: string;
}

export const Header = ({ title, fromPath }: Props) => {
  const router = useRouter();
  const setShow = usePodcastSearchbarStore((s) => s.setShow);

  const handleBack = () => {
    if (fromPath) {
      router.replace(fromPath);
      return;
    }
    router.back();
  };
  //
  return (
    <header className="bg-background sticky top-0 z-8">
      <div className="flex-row-cb px-4 h-[60px]">
        {title ? (
          <div className="flex-row-cs gap-4">
            <IconButton
              Icon={IconChevronLeft}
              onClick={handleBack}
              title="Back"
              compact
            />
            <h1 className="text-lg font-medium">{title}</h1>
          </div>
        ) : (
          <div className="flex-row-cb flex-1 gap-4">
            <Logo iconOnly size={24} />
            <SearchBar />
            <IconButton
              Icon={IconCategoryPlus}
              onClick={setShow}
              title="Options"
              compact
            />
          </div>
        )}
      </div>
    </header>
  );
};
