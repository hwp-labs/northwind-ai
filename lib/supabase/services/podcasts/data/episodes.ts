import { PodcastDto } from "../types";

export const data: PodcastDto[] = [
  {
    id: 1,
    datetime: "2026-03-01T19:00:00.000Z",
    title: "Northstar",
    summary:
      "A design session with <b>Emmanuel Tugbeh</b>, creator of <b>Northstar</b> - <br/>AI-native, Cross-platform Product Analytics Solution.",
    notionUrl:
      "https://held-gambler-004.notion.site/Northwind-AI-31b6a7cc633c8075b78ef30bf30c7ec7",
    spaceUrl: "https://x.com/i/spaces/1nxnRYRXOgjxO",
    listeners: 31,
    liveListeners: 18,
  },
  {
    id: 2,
    datetime: "2026-03-08T19:00:00.000Z",
    title: "Scupex",
    summary:
      "A design session with <b>Martins Akinbo</b>, creator of <b>Scupex</b> - <br/>Cloud-native, Multi-tenant School Management Solution.",
    guest: { username: "@sanmiAkinbo", avatar: "/uploads/logos/scupex.png" },
    notionUrl:
      "https://held-gambler-004.notion.site/Scupex-31b6a7cc633c81eba6adcdddbe8fa5a1",
    spaceUrl: "https://x.com/i/spaces/1qGvvkLwDBAGB",
    listeners: 135,
    liveListeners: 103,
  },
  {
    id: 3,
    datetime: "2026-03-15T19:00:00.000Z",
    title: "Bookin",
    summary:
      "A design session with <b>Oluchi Ifeanyi</b>, creator of <b>Bookin</b> - <br/>All-in-one booking platform for creative professionals.",
    guest: { username: "@feanyluch", avatar: "/uploads/logos/bookin.png" },
    notionUrl:
      "https://held-gambler-004.notion.site/Bookin-3226a7cc633c81f1a9d8ebbce7bbc6b3",
    spaceUrl: "https://x.com/i/spaces/1DxleEjawjlKL",
    listeners: 136,
    liveListeners: 112,
  },
  {
    id: 4,
    datetime: "2026-03-22T19:00:00.000Z",
    title: "Izivote",
    summary:
      "A design session with <b>Joshua Uyi</b>, creator of <b>Izivote</b> - <br/>Cloud-based voting platform for events and campaigns.",
    guest: { username: "@joshuaouyi", avatar: "/uploads/logos/izivote.png" },
    notionUrl:
      "https://held-gambler-004.notion.site/Izivote-3206a7cc633c807dbd55c6fbb373ff37",
    spaceUrl: "https://x.com/i/spaces/1XGygmPjeMkxM",
    listeners: 92,
    liveListeners: 84,
  },
  {
    id: 5,
    datetime: "2026-03-29T19:00:00.000Z",
    title: "Tetra",
    summary:
      "A design session with <b>Aboyowa Olueh</b>, creator of <b>Tetra</b> - <br/>Virtual Dollar Cards for seamless Int'l transactions.",
    guest: { username: "@OluehAboyowa", avatar: "/uploads/logos/tetra.png" },
    notionUrl:
      "https://held-gambler-004.notion.site/Tetra-3316a7cc633c81429fabfb80a8601f8d",
    spaceUrl: "https://x.com/i/spaces/1nxeLyZOkXLJX",
    listeners: 41,
    liveListeners: 21,
  },
  {
    id: 6,
    datetime: "2026-04-05T19:00:00.000Z",
    title: "Brand-Led<br/>Growth Hacking",
    isLongTitle: true,
    summary:
      "A fireside chat with <b>Isaac Adebiyi</b> (Founder/CEO, Adiz Media) on <br/>designing a brand identity that drive sales and customer loyalty.",
    guest: { username: "@theisaacade", avatar: "/uploads/logos/adiz.png" },
    notionUrl:
      "https://held-gambler-004.notion.site/Brand-Led-Growth-Hacking-3336a7cc633c810692e6e80f80946edb",
    spaceUrl: "https://x.com/i/spaces/1rGmqojWqzqGy",
    listeners: 45,
    liveListeners: 31,
    series: "fc",
  },
  {
    id: 7,
    datetime: "2026-04-12T19:00:00.000Z",
    title: "Northwind AI Podcast",
    titleShort: "Grab's journey from MVP to Product Market Fit",
    isLongTitle: true,
    summary:
      "A case study on Grab's journey <br/>from MVP to Product Market Fit.",
    guest: { username: "@InsideGrab", avatar: "/uploads/logos/grab.png" },
    notionUrl:
      "https://held-gambler-004.notion.site/Grab-com-from-MVP-to-PMF-3406a7cc633c817aba03ed635c6f6253",
    spaceUrl: "https://x.com/i/spaces/1YxNrZNPNnpxw",
    listeners: 31,
    liveListeners: 10,
    series: "cs",
  },
  {
    id: 8,
    datetime: "2026-04-18T19:00:00.000Z",
    title: "Bitcoin Verse Radio",
    titleShort: "Hype To Adoption: Building Web3 Products",
    isLongTitle: true,
    summary:
      "From Hype To Adoption: What Actually Works When Building Web3 Products?",
    host: { username: "@realVerseRadio" },
    guest: [
      { username: "@2gbeh" },
      { username: "@Aderoju_isaac9" },
      { username: "@CodyEffect" },
      { username: "@edafeafiemo" },
    ],
    displayAvatar: "/uploads/logos/verse.png",
    displayAvatars: [
      "/images/icon-hwp.png",
      "/uploads/logos/btc.png",
      "/uploads/logos/verse.png",
    ],
    notionUrl: null,
    spaceUrl: "https://x.com/i/spaces/1yxBeMlXgZPJN",
    listeners: 243,
    series: "fc",
  },
  {
    id: 9,
    datetime: "2026-05-17T19:00:00.000Z",
    title: "Northwind AI Podcast",
    titleShort: "KPIs of World-Class Software Engineers",
    isLongTitle: true,
    summary:
      "Key Performance Indicators of <br/>World-Class Software Engineers",
    host: {
      avatar: "/images/avatar-etugbeh.png",
      name: "Emanuel, O.",
      username: "@2gbeh",
      flag: "/uploads/podcast/flag-ng.webp",
    },
    guest: [
      {
        avatar: "/uploads/podcast/avatar-polalere.png",
        name: "Phillip, O.",
        username: "@philstring93",
        flag: "/uploads/podcast/flag-us.webp",
      },
      {
        avatar: "/uploads/podcast/avatar-aosawere.png",
        name: "Anthony, O.",
        username: "@workofao",
        flag: "/uploads/podcast/flag-uk.webp",
      },
    ],
    displayAvatar: "/uploads/logos/moniepoint.png",
    notionUrl:
      "https://held-gambler-004.notion.site/KPIs-of-World-Class-Engineers-3486a7cc633c8078980ded890c2c9cc6",
    spaceUrl: "https://x.com/i/spaces/1mGPaLAgERYJN",
    listeners: 22,
    liveListeners: 14,
    series: "fc",
  },
  {
    id: 10,
    datetime: "2026-05-27T19:00:00.000Z",
    title: "Siiqo",
    summary:
      "A design session with <b>Okereke Innocent</b>, creator of <b>Siiqo</b> - <br/>Escrow-based Local Commerce OS for SMEs.",
    guest: { username: "@OkerekeChinweo1", avatar: "/uploads/logos/siiqo.png" },
    displayAvatars: [
      "/images/avatar-etugbeh2.png",
      "/uploads/podcast/avatar-oinnocent.jpg",
      "/uploads/logos/siiqo.png",
    ],
    notionUrl:
      "https://held-gambler-004.notion.site/Tetra-3316a7cc633c81429fabfb80a8601f8d",
    spaceUrl: "https://x.com/i/spaces/1vKpPPNYPnOKE",
    listeners: 0,
    liveListeners: 0,
  },
  {
    id: 11,
    datetime: "2026-05-30T19:00:00.000Z",
    title: "Routine Investigations API Modeling",
    isLongTitle: true,
    summary:
      "A fireside chat with <b>Emmanuel Okene</b> (Cardiac Physiologist, UBTH)",
    guest: {
      username: "@emmanuelokene44",
      avatar: "/uploads/podcast/avatar-eokene.jpg",
    },
    displayAvatar: "/uploads/logos/ubth.png",
    notionUrl:
      "https://held-gambler-004.notion.site/Routine-Investigations-Modeling-36c6a7cc633c8017b911d6266fa82422",
    spaceUrl: "https://x.com/i/spaces/1RKZzzBwanMKB",
    listeners: 0,
    liveListeners: 0,
    series: "fc",
  },
];

/**
  {
    id: 10,
    datetime: "2026-05-24T19:00:00.000Z",
    title: "Northwind AI Podcast",
    titleShort: "Risk Assessment & AI",
    isLongTitle: true,
    summary: "Risk Assessment & AI with Tech Bro Wives",
    host: {
      avatar: "/images/avatar-etugbeh.png",
      username: "Mr.,Mrs Tugbeh",
    },
    guest: [
      {
        avatar: "/uploads/podcast/avatar-polalere.png",
        username: "Mr.,Mrs Uyi",
      },
      {
        avatar: "/uploads/podcast/avatar-aosawere.png",
        username: "Mr.,Mrs Chimaobi",
      },
      {
        avatar: "/uploads/podcast/avatar-polalere.png",
        username: "Mr.,Mrs Aluko",
      },
      {
        avatar: "/uploads/podcast/avatar-aosawere.png",
        username: "Mr.,Mrs Osawere",
      },
    ],
    notionUrl:
      "https://held-gambler-004.notion.site/KPIs-of-World-Class-Engineers-3486a7cc633c8078980ded890c2c9cc6",
    spaceUrl: "https://x.com/i/spaces/1mGPaLAgERYJN",
    listeners: 0,
    liveListeners: 0,
    series: "fc",
  },
 */
