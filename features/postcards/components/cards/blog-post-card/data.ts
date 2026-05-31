export interface BlogDto {
  classNames?: { img?: string; h1?: string; hasOpacity?: boolean };
  logo: string | string[];
  thumbnail: string;
  appName?: string;
  headline: string;
  location: string;
  date: string;
  categories: string[];
  event?: boolean;
  url?: string;
  _notes?: string;
}

export const data: BlogDto[] = [
  {
    logo: "babago.png",
    thumbnail: "thumb-app.png",
    headline:
      "Northwind AI secures deal with Babago to pilot Ride-hailing App, On-demand Food Delivery App at Gwarinpa, Abuja",
    location: "Abuja",
    date: "2025-03-18",
    categories: ["Transport", "Logistics"],
    _notes: "Gwarinpa, Maitama, Wuse",
  },
  {
    classNames: {
      img: "object-bottom!",
    },
    logo: "hms.png",
    thumbnail: "thumb-real-estate.png",
    headline:
      "Northwind AI secures deal with 24hms.com to pilot AI-native Real Estate Marketplace at Asaba, Delta",
    location: "Delta",
    date: "2025-03-22",
    categories: ["Real Estate", "AI"],
  },
  {
    classNames: {
      h1: "text-[19px]!",
    },
    logo: ["nimabox.png", "cgmi.png"],
    thumbnail: "thumb-aisle.png",
    appName: "CredenceBox",
    headline:
      "Northwind AI partners with Nimabox to deploy Cloud-native, Cross-platform ERP Solution across CGMi HQ and branches",
    location: "Benin City",
    date: "2026-04-01",
    categories: ["SaaS", "FinTech"],
    url: "credencebox.com",
  },
  {
    classNames: {
      img: "object-bottom!",
    },
    logo: ["nimabox.png", "faith-mediplex.png"],
    thumbnail: "thumb-pos-clinic.png",
    headline:
      "Northwind AI partners with Nimabox to deploy Point-of-Sale (POS) Terminals at Faith Mediplex Teaching Hospital",
    location: "Benin City",
    date: "2026-04-01",
    categories: ["Healthcare", "FinTech"],
  },
  {
    logo: ["nimabox.png", "biu.png"],
    thumbnail: "thumb-student-phone.png",
    headline:
      "Northwind AI partners with Nimabox to deploy Tokenized Student Wallet at Benson Idahosa University",
    location: "Benin City",
    date: "2026-04-01",
    categories: ["EdTech", "FinTech", "DeFI"],
  },
  {
    classNames: {
      img: "object-bottom!",
      h1: "_text-[19px]! py-1!",
    },
    logo: ["/images/icon-hwp.png", "/images/avatar-etugbeh.png", "grab.png"],
    thumbnail: "thumb-grab.png",
    headline:
      "A case study on Grab's journey from MVP (Minimum Viable Product) to Product Market Fit",
    location: "Twitter Spaces",
    date: "2026-04-12T19:00:00.000Z",
    categories: ["Transport", "Logistics", "FinTech"],
    event: true,
    url: "northwindai.org/podcast/7",
  },
  {
    classNames: {
      h1: "text-[19px]!",
    },
    logo: "shago.png",
    thumbnail: "thumb-hardware.png",
    headline:
      "Northwind AI secures deal with shagoapp.com to pilot AI chat-enabled Gadgets, Electronics Marketplace at FarmCenter, Kano",
    location: "Kano",
    date: "2025-04-18",
    categories: ["AI", "Marketplace", "Logistics"],
  },
  {
    classNames: {
      img: "object-bottom!",
      h1: "text-[32px]! py-1! leading-9!",
      hasOpacity: true,
    },
    logo: [
      "/images/avatar-etugbeh.png",
      "/uploads/podcast/avatar-polalere.png",
      "/uploads/podcast/avatar-aosawere.png",
    ],
    thumbnail: "thumb-skyline.jpg",
    headline: "Key Performance Indicators of World-Class Software Engineers",
    location: "Twitter Spaces",
    date: "2026-05-17T19:00:00.000Z",
    categories: ["#@2gbeh", "@philstring93", "@workofao"],
    event: true,
    url: "northwindai.org/podcast/9",
  },
  {
    classNames: {
      img: "object-center!",
      h1: "text-[42px]! py-1! leading-10!",
    },
    logo: [
      "/images/icon-hwp.png",
      "/images/avatar-etugbeh.png",
      "/uploads/podcast/avatar-eokene.jpg",
    ],
    thumbnail: "thumb-lab.jpg",
    headline: "Routine Investigations API Modeling",
    location: "Twitter Spaces",
    date: "2026-05-24T19:00:00.000Z",
    categories: ["@2gbeh", "@emmanuelokene44"],
    event: true,
    url: "northwindai.org/podcast/11",
  },
  {
    classNames: {
      img: "object-center!",
      h1: "text-[42px]! py-1! leading-10!",
      hasOpacity: true,
    },
    logo: [
      "/images/avatar-etugbeh.png",
      "/uploads/podcast/avatar-juyi.png",
      "/uploads/podcast/avatar-aosawere.png",
    ],
    thumbnail: "thumb-wheel.png",
    headline: "Risk Assessment & AI with Tech Bro Wives",
    location: "Twitter Spaces",
    date: "2026-05-24T19:00:00.000Z",
    categories: ["#@2gbeh", "@joshuaouyi", "@workofao"],
    event: true,
    url: "northwindai.org/podcast/*",
  },
];
