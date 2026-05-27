import type { Metadata, Viewport } from "next";
import { APP } from "./APP";
import { APP_PODCAST } from "./APP_PODCAST";
import { COPY } from "./LOCALE";

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const METADATA_PODCAST: Metadata = {
  title: {
    default: APP_PODCAST.titleVerbose,
    template: `%s | ${APP_PODCAST.name}`,
  },
  description: APP_PODCAST.description,
  keywords: [...APP_PODCAST.keywords, ...APP.keywords],
  creator: APP.creator,
  // META
  generator: "Next.js",
  applicationName: APP_PODCAST.name,
  category: "technology",
  classification: "Blog",
  referrer: "origin-when-cross-origin",
  publisher: APP.owner,
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  metadataBase: new URL(APP_PODCAST.website),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "fr-FR": "/fr-FR",
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest
  manifest: "/manifest-podcast.json",
  // OPEN GRAPH
  openGraph: {
    type: "website",
    url: APP_PODCAST.website,
    siteName: APP_PODCAST.name,
    title: APP_PODCAST.titleVerbose,
    description: APP_PODCAST.description,
    images: {
      url: APP_PODCAST.socialPreview,
      alt: "",
      width: 640,
      height: 320,
    },
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_PODCAST.titleVerbose,
    description: APP_PODCAST.description,
    creator: "@2gbeh",
    images: {
      url: APP_PODCAST.socialPreview,
      alt: "",
    },
  },
  // ROBOTS
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
