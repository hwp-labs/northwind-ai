export interface EpisodeDto {
  id: number;
  datetime: string;
  thumbnail?: string;
  displayAvatars?: string[];
  topic: string;
  topicShort?: string;
  topicRichText?: string;
  summary?: string;
  _notes?: any;
  tags?: string | string[];
  host?: number;
  guests?: number[];
  notionUrl?: string;
  virtualLink: string;
  virtualPlatform?: "x" | "yt" | "tk";
  listeners: number;
  liveListeners: number;
  series?: "ds" | "fc" | "cs" | "ai"| "ml";
  favorite?: boolean;
  hide?: boolean;
  meta?: {
    src: string;
    title: string;
    url: string;
    cta?: string;
    social?: string;
    ctaText?: string;
  };
}
