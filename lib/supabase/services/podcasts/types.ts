export interface PodcastDto {
  id: number;
  datetime: string;
  notionUrl: string | null;
  spaceUrl: string | null;
  listeners: number | null;
  format?: PodcastFormatEnum;
  guest: PodcastGuest;
  topic: PodcastTopic;
}
export interface TransformedPodcastDto extends PodcastDto {
  dateText: string;
  timeText: string;
  isOngoing: boolean;
  isConcluded: boolean;
  isFiresideChat: boolean;
}
export interface PodcastGuest {
  name: string;
  username: string;
  company: string | null;
  jobTitle: string | null;
}
export interface PodcastTopic {
  title: string;
  description: string | null;
}

export enum PodcastFormatEnum {
  DESIGN_SESSION = "design-session",
  FIRESIDE_CHAT = "fireside-chat",
}
