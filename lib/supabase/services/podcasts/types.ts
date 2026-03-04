export interface PodcastDto {
  id: number;
  date?: string;
  dateText: string;
  hour?: number;
  timeText: string;
  appName: string;
  guestUsername?: string;
  guestName?: string;
  guestCareerTitle?: string;
  notionUrl?: string;
  spaceUrl?: string;
  listeners?: number;
  format?: PodcastFormatEnum;
}

export enum PodcastFormatEnum {
  DESIGN_SESSION = "design-session",
  FIRESIDE_CHAT = "fireside-chat",
}