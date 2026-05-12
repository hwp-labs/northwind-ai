export interface PodcastV2Dto {
  id: number;
  avatars?: string[];
  datetime: string;
  host?: string;
  guest?: string | string[];
  title: string;
  titleShort?: string;
  summary?: string;
  notionUrl: string | null;
  spaceUrl: string | null;
  listeners: number;
  customTag?: string;
}

export interface PodcastDto {
  id: number;
  datetime: string;
  logo?: string[];
  title: string;
  isLongTitle?: boolean;
  richTextLine1: string;
  richTextLine2: string;
  guestUsername: string | string[] | null;
  notionUrl: string | null;
  spaceUrl: string | null;
  listeners: number;
  series?: PodcastSeriesEnum;
  customTag?: string;
}
export interface TransformedPodcastDto extends PodcastDto {
  dateText: string;
  timeText: string;
  datetimeText: string;
  isOngoing: boolean;
  isConcluded: boolean;
  isFiresideChat: boolean;
  seriesText: string;
  titleSeriesText: string;
  logoSafe: string[];
  guestUsernameSafe: string[];
  lastLogoSrc: string;
}

export enum PodcastSeriesEnum {
  DESIGN_SESSION = "design-session",
  FIRESIDE_CHAT = "fireside-chat",
  CASE_STUDY = "case-study",
}

export enum PodcastCustomTagEnum {
  BOOKIN = "bookin",
  VERSE_RADIO = "verse-radio",
  PYQT = "pyqt",
}
