"use client";

import Link from "next/link";
import { DownloadIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { useQueryParams } from "@/hooks/use-query-params";
import { useHtmlToImage } from "../hooks/use-html-to-image";
import { Pager } from "./pager";

export const Header = () => {
  const { get } = useQueryParams();
  const { tabIndex } = get({ tabIndex: 0 });
  const { loading, convertToPng } = useHtmlToImage({});
  //
  return (
    <header className="flex-row-cb px-4 py-4 debug_">
      <nav className="flex-row-cs gap-4 text-sm">
        {["Default", "Monthly", "FAQs", "Podcast","Blog", "Qverse"].map(
          (item, i) => (
            <Link
              key={i}
              href={`?tabIndex=${i}`}
              className={
                i === Number(tabIndex) ? "text-white" : "text-muted-foreground"
              }
            >
              {item}
            </Link>
          ),
        )}
      </nav>
      <Pager />
      <Button
        variant="secondary"
        size="icon"
        onClick={() => convertToPng("post-card")}
      >
        {loading ? <Spinner /> : <DownloadIcon size={14} />}
      </Button>
    </header>
  );
};
