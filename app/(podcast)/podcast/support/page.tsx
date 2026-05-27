import type { Metadata } from "next";
import Image from "next/image";
import clsx from "clsx";
import {
  IconAbc,
  IconBuildingBank,
  IconNumber123,
  IconScan,
} from "@tabler/icons-react";
//
import { AppBar } from "@/components/species/podcast-app/components/app-bar";
import { SurfaceCard } from "@/components/species/podcast-app/components/surface-card";
import { CopyOpayWidget } from "@/components/species/podcast-app/components/copy-opay-widget";
import { PATH } from "@/constants/PATH";

export const metadata: Metadata = {
  title: "Support",
};

export default async function SupportPage() {
  return (
    <>
      <AppBar title="Support" backTo={PATH.podcast} />
      <main className="mx-auto w-full px-4 sm:w-2xl">
        <SurfaceCard className="space-y-4">
          {[
            {
              Icon: <IconBuildingBank size={20} />,
              label: "Bank Name",
              value: "OPay Digital Service Limited",
            },
            {
              Icon: <IconAbc />,
              label: "Account Name",
              value: "EMMANUEL TUGBEH",
            },
            {
              Icon: <IconNumber123 />,
              label: "Account Number",
              value: "81 6996 0927",
            },
            {
              Icon: <IconScan size={22} className="mt-2" />,
              label: "Scan QR Code",
              value: (
                <Image
                  src="/images/opay-scan.png"
                  alt=""
                  width={160}
                  height={160}
                  priority
                  className="mt-1"
                />
              ),
            },
          ].map(({ Icon, label, value }, i) => (
            <div
              key={i}
              className={clsx("flex gap-5", i !== 3 && "items-center")}
            >
              {Icon}
              <div className="flex-1 space-y-1">
                <div className="text-muted-foreground text-sm">{label}</div>
                <div
                  className={clsx(
                    "flex-row-cb font-medium",
                    i === 2 && "text-2xl font-semibold!",
                  )}
                >
                  {value}
                  {i === 2 && <CopyOpayWidget />}
                </div>
              </div>
            </div>
          ))}
        </SurfaceCard>
      </main>
      <footer className="absolute bottom-0 w-full p-4">
        <CopyOpayWidget variant="button" />
      </footer>
    </>
  );
}
