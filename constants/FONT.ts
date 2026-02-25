import { Raleway, Poppins, Montserrat, Satisfy } from "next/font/google";

export const fontPoppins = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const fontMontserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const fontRaleway = Raleway({
  variable: "--font-Raleway",
  subsets: ["latin"],
  display: "swap",
});

export const fontSatisfy = Satisfy({
  variable: "--font-Satisfy",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
