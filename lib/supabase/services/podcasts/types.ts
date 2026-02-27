export interface PodcastDto {
  id: number;
  date?: string;
  dateText: string;
  hour?: number;
  timeText: string;
  appName: string;
  guestName?: string;
  notionUrl?: string;
  spaceUrl?: string;
  listeners?: number;
}