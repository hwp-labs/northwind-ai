export interface EpisodeDto {
  id: number;
  datetime: string;
  thumbnail?: string;
  displayAvatars?: string[];
  topic: string;
  topicShort?: string;
  summary?: string;
  _notes?: any;
  tags?: string[];
  host?: number;
  guests?: number[];
  notionUrl?: string;
  virtualLink: string;
  listeners: number;
  liveListeners: number;
  series?: "ds" | "fc" | "cs";
  favorite?: boolean;
  hide?: boolean;
  meta?: {
    src: string;
    title: string;
    url: string;
    cta: string;
    social?: string;
  };
}
