import { TransformedEpisodeDto } from "@/lib/supabase/services/podcasts/types";
import { create } from "zustand";

type ModalVariant = "options" | "rsvp" | "preview" | "filter" | "sort";

interface StoreState {
  episode: TransformedEpisodeDto|null;
  search: { show: boolean; typing: boolean };
  modal: { open: boolean; variant: ModalVariant };
}

interface StoreAction {
  reset: () => void;
  setEpisode: (payload: TransformedEpisodeDto) => void;
  mutateSearch: (payload: Partial<StoreState["search"]>) => void;
  mutateModal: (payload: Partial<StoreState["modal"]>) => void;
}

type StoreType = StoreState & StoreAction;

const initialState: StoreState = {
  episode: null,
  search: { show: false, typing: false },
  modal: { open: false, variant: "options" },
};

export const usePodcastStore = create<StoreType>()((set, get) => ({
  ...initialState,
  reset: () => set(initialState),
  setEpisode: (p) => set((s) => ({ episode: p })),
  mutateModal: (p) => set((s) => ({ modal: { ...s.modal, ...p } })),
  mutateSearch: (p) => set((s) => ({ search: { ...s.search, ...p } })),
}));
