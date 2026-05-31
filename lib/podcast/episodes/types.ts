import { SpeakerDto } from "../speakers/types";

export interface EpisodeDto {
  id: number;
  datetime: string;
  thumbnail?: string;
  topic: string;
  topicShort?: string;
  summary?: string;
  _notes?: any;
  tags?: string[];
  host?: number;
  moderator?: number;
  guests: number[];
  displayAvatars?: string[];
  notionUrl?: string;
  spaceUrl: string;
  listeners: number;
  liveListeners: number;
  series?: "ds" | "fc" | "cs";
}

export interface TransformedEpisodeDto extends EpisodeDto {
  dateText: string;
  dateTextShort: string;
  timeText: string;
  datetimeText: string;
  datetimeTextShort: string;
  isOngoing: boolean;
  isConcluded: boolean;
  titleNobr: string;
  summaryNobr: string;
  seriesText: string;
  seriesImage: string;
  titleSeriesText: string;
  guestList?: string[];
  ctaText: "RSVP" | "Attend" | "Listen";
  safeTags: string[];
  safeTopic: string;
  safeGuests: SpeakerDto[];
  canPlay?: boolean;
}
