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
  search: { show: boolean; value: string };
  modal: { open: boolean; variant: ModalVariant };
}

interface StoreAction {
  reset: () => void;

  setEpisode: (payload: TransformedEpisode) => void;

  mutateSearch: (payload: Partial<StoreState["search"]>) => void;
  toggleSearch: () => void;

  mutateModal: (payload: Partial<StoreState["modal"]>) => void;
  resetModal: () => void;
}

type StoreType = StoreState & StoreAction;

const initialState: StoreState = {
  episode: null,
  search: { show: false, value: "" },
  modal: { open: false, variant: "options" },
};

export const usePodcastStore = create<StoreType>()((set, get) => ({
  ...initialState,
  reset: () => set(initialState),

  setEpisode: (p) => set((s) => ({ episode: p })),

  mutateSearch: (p) => set((s) => ({ search: { ...s.search, ...p } })),
  toggleSearch: () =>
    set((s) => ({ search: { show: !s.search.show, value: "" } })),

  mutateModal: (p) => set((s) => ({ modal: { ...s.modal, ...p } })),
  resetModal: () => set((s) => ({ modal: initialState.modal })),
}));
