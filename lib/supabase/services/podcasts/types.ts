export interface PodcastSpeakerDto {
  name?: string;
  avatar?: string;
  username: string;
  flag?: string;
}

export interface PodcastDto {
  id: number;
  datetime: string;
  title: string;
  titleShort?: string;
  isLongTitle?: boolean;
  summary: string | null;
  host?: PodcastSpeakerDto;
  guest?: PodcastSpeakerDto | PodcastSpeakerDto[];
  displayAvatar?: string;
  displayAvatars?: string[];
  notionUrl: string | null;
  spaceUrl: string | null;
  listeners: number;
  series?: "ds" | "fc" | "cs";
}
export interface TransformedPodcastDto extends PodcastDto {
  cover: string;
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
  guestList?: string[];
}
