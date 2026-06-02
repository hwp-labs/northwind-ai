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

  resetSearch: () => void;
  toggleSearch: () => void;
  mutateSearch: (payload: Partial<StoreState["search"]>) => void;

  resetModal: () => void;
  mutateModal: (payload: Partial<StoreState["modal"]>) => void;
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

  resetSearch: () => set((s) => ({ search: initialState.search })),
  toggleSearch: () =>
    set((s) => ({ search: { show: !s.search.show, value: "" } })),
  mutateSearch: (p) => set((s) => ({ search: { ...s.search, ...p } })),

  resetModal: () => set((s) => ({ modal: initialState.modal })),
  mutateModal: (p) => set((s) => ({ modal: { ...s.modal, ...p } })),
}));
