import type { Metadata, Viewport } from "next";
import clsx from "clsx";
//
import { Explorer } from "@/components/explorer";
import { ToasterClient } from "@/components/organisms/toaster-client";
import { ServiceWorker } from "@/components/organisms/service-worker";
import { MOCK } from "@/constants/MOCK";
import { METADATA, VIEWPORT } from "@/constants/META";
import {
  fontPoppins,
  fontMontserrat,
  fontRaleway,
  fontBebasNeue,
} from "@/constants/FONT";
import "@/styles/globals.css";
import { ProgressBar } from "@/components/progress-bar";

export const metadata: Metadata = METADATA;
export const viewport: Viewport = VIEWPORT;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="_dark" data-scroll-behavior="smooth">
      <body
        className={clsx(
          fontPoppins.variable,
          fontMontserrat.variable,
          fontRaleway.variable,
          fontBebasNeue.variable,
          "font-f1 antialiased",
        )}
      >
        {children}
        <ProgressBar />
        {MOCK.explorer.show ? <Explorer /> : null}
        <ToasterClient />
        <ServiceWorker />
      </body>
    </html>
  );
}
