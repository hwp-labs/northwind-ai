export interface SpeakerEntity {
  id: number;
  avatar: string;
  firstName: string;
  surname: string;
  displayName: string;
  sex?: "m" | "f";
  email?: string;
  tel?: string;
  occupation?: string;
  bio?: string;
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
    tt?: string;
    email?: string;
  };
  hide?: boolean;
  host?: boolean;
}

export interface SpeakerDto extends SpeakerEntity {}
