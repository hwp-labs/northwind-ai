export interface PodcastSpeakerDto {
  avatar?: string;
  name?: string;
  username: string;
  bio?: string;
  flag?: string;
  host?: boolean;
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
  liveListeners?: number;
  series?: "ds" | "fc" | "cs";
  tags?: string[];
}
export interface TransformedEpisodeDto extends PodcastDto {
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
  safeGuests: PodcastSpeakerDto[];
}

export interface PodcastGuestDto {
  avatar: string;
  firstName?: string;
  surname?: string;
  displayName: string;
  sex?: "m" | "f";
  email?: string;
  tel?: string;
  occupation?: string;
  website?: string;
  location?: {
    city?: string;
    country?: string;
    // https://www.worldometers.info/geography/flags-of-the-world/
    flag?: string;
  };
  socials: {
    x: string;
    in?: string;
    ig?: string;
  };
}

export interface PodcastAnalyticsDto {
  episodes?: {
    total?: number;
    designSession?: number;
    firesideChat?: number;
    caseStudy?: number;
  };
  guests?: {
    total?: number;
    male?: number;
    maleRate?: number;
    female?: number;
    femaleRate?: number;
    location?: Record<string, number>;
  };
  listeners?: {
    total?: number;
    average?: number;
    averageRate?: number;
  };
}
