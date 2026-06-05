import { data } from "./data";
import { SpeakerDto } from "./types";

export type TransformedSpeaker = ReturnType<typeof transformSpeaker>;

export const transformSpeaker = (id?: number | string) => {
  let e: SpeakerDto = data[data.length - 1]; // first

  const row = data.find((row) => row.id === Number(id));
  if (row) e = row;

  return {
    ...e,
    avatar: e?.avatar || "/icon.png",
    fullName: `${e?.firstName} ${e?.surname}`,
  };
};
