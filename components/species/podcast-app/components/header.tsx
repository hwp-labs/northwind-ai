"use client";

import { IconCategoryPlus, IconArrowLeft } from "@tabler/icons-react";
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
    <header className="flex-row-cb _border-b px-4 pt-3 pb-1">
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
    </header>
  );
};
