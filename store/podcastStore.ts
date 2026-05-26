import { create } from "zustand";

type ModalVariant = "default" | "rsvp" | "play" | "filter" | "sort";

interface StoreState {
  search: { show: boolean; typing: boolean };
  modal: { open: boolean; variant: ModalVariant };
}

interface StoreAction {
  reset: () => void;
  mutateSearch: (payload: Partial<StoreState["search"]>) => void;
  mutateModal: (payload: Partial<StoreState["modal"]>) => void;
}

type StoreType = StoreState & StoreAction;

const initialState: StoreState = {
  search: { show: false, typing: false },
  modal: { open: false, variant: "default" },
};

export const usePodcastStore = create<StoreType>()((set, get) => ({
  ...initialState,
  reset: () => set(initialState),
  mutateModal: (p) => set((s) => ({ modal: { ...s.modal, ...p } })),
  mutateSearch: (p) => set((s) => ({ search: { ...s.search, ...p } })),
}));
