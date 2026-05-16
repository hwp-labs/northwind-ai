export interface PodcastDto {
  id: number;
  avatars: string[] | null;
  avatarFlags?: string[];
  datetime: string;
  title: string;
  titleShort?: string;
  isLongTitle?: boolean;
  summary: string | null;
  host?: string;
  guest?: string | string[];
  notionUrl: string | null;
  spaceUrl: string | null;
  listeners: number;
  series?: "ds" | "fc" | "rt";
}
export interface TransformedPodcastDto extends PodcastDto {
  displayAvatar: string;
  dateText: string;
  timeText: string;
  datetimeText: string;
  isOngoing: boolean;
  isConcluded: boolean;
  // isFiresideChat: boolean;
  titleNobr: string;
  summaryNobr: string;
  seriesText: string;
  titleSeriesText: string;
  // guestUsernameSafe: string[];
  // lastLogoSrc: string;
}