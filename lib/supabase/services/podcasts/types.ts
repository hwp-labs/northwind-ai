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
  liveListeners?: number;
  series?: "ds" | "fc" | "cs";
}
export interface TransformedEpisodeDto extends PodcastDto {
  dateText: string;
  dateTextShort: string;
  timeText: string;
  datetimeText: string;
  datetimeTextShort: string;
  isOngoing: boolean;
  isConcluded: boolean;
  // isFiresideChat: boolean;
  titleNobr: string;
  summaryNobr: string;
  seriesText: string;
  seriesImage: string;
  titleSeriesText: string;
  // guestUsernameSafe: string[];
  // lastLogoSrc: string;
  guestList?: string[];
  ctaText: "RSVP" | "Attend" | "Listen";
}

export interface PodcastGuestDto {
  avatar: string;
  firstName?: string;
  surname?: string;
  displayName: string;
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
    location?: {
      country: string;
      total: number;
    }[];
  };
  listeners?: {
    total?: number;
    average?: number;
    averageRate?: number;
  };
}
