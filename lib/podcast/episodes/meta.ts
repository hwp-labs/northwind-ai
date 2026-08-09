import { EpisodeDto } from "./types";

export const EpisodeMeta = {
  expo: {
    src: "/uploads/logos/expo-cbt.png",
    title:
      "Open-source CBT WebApp | Dept. of<br/>Computer Science & Engineering, OAU",
    url: "github.com/expo-cbt",
    ctaText: "Become a contributor",
    social: "git",
  },
  oau: {
    src: "/uploads/logos/oau.png",
    title:
      "SEN106/SEN216 - Introduction to Web Technology | Obafemi Awolowo Uni...",
    url: "oauife.edu.ng",
    cta: "Watch Now",
  },
  siiqo: {
    src: "/uploads/logos/siiqo.png",
    title: "Escrow-based, Crypto-enabled, Digital Storefront for SMEs",
    url: "siiqo.com",
    cta: "Get Started",
  },
} satisfies Record<string, EpisodeDto["meta"]>;
