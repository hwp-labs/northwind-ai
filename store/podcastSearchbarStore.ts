import { create } from "zustand";

interface StoreState {
  show: boolean;
  typing: boolean;
  value: string;
}

interface StoreAction {
  reset: () => void;
  setShow: (payload?: boolean) => void;
  setValue: (payload: string) => void;
}

type StoreType = StoreState & StoreAction;

const initialState: StoreState = {
  show: false,
  typing: false,
  value: "",
};

export const usePodcastSearchbarStore = create<StoreType>()((set, get) => ({
  ...initialState,
  reset: () => set(initialState),
  setShow: (p) =>
    set((s) => ({
      show: p || !s.show,
    })),
  setValue: (p) =>
    set({
      value: p,
      typing: p.trim().length > 0,
    }),
}));
