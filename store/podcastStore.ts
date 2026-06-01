import { create } from "zustand";
import { TransformedEpisode } from "@/lib/podcast/episodes/utils";

type ModalVariant =
  | "options"
  | "rsvp"
  | "preview"
  | "unsub"
  | "filter"
  | "sort";

interface StoreState {
  episode: TransformedEpisode | null;
  search: { show: boolean; typing: boolean };
  modal: { open: boolean; variant: ModalVariant };
}

interface StoreAction {
  reset: () => void;

  setEpisode: (payload: TransformedEpisode) => void;

  mutateSearch: (payload: Partial<StoreState["search"]>) => void;
  resetModal: () => void;

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
  resetModal: () => set((s) => ({ modal: initialState.modal })),

  mutateSearch: (p) => set((s) => ({ search: { ...s.search, ...p } })),
}));
