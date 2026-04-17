export interface IBlog {
  classNames?: { img?: string; h1?: string };
  logo: string | string[];
  thumbnail: string;
  headline: string;
  location: string;
  date: string;
  categories: string[];
  event?: boolean;
  url?: string;
}
