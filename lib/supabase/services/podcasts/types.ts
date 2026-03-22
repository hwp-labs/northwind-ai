export interface PodcastDto {
  id: number;
  datetime: string;
  title: string;
  richTextLine1: string;
  richTextLine2: string;
  guestUsername: string | null;
  notionUrl: string | null;
  spaceUrl: string | null;
  listeners: number;
  format?: PodcastFormatEnum;
}
export interface TransformedPodcastDto extends PodcastDto {
  dateText: string;
  timeText: string;
  datetimeText: string;
  isOngoing: boolean;
  isConcluded: boolean;
  isFiresideChat: boolean;
}

export enum PodcastFormatEnum {
  DESIGN_SESSION = "design-session",
  FIRESIDE_CHAT = "fireside-chat",
}
