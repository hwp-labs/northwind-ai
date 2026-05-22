import { create } from "zustand";

interface StoreState {
  show: boolean;
  value: string;
  typing: boolean;
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
      value: "",
      typing: false,
    })),
  setValue: (p) =>
    set({
      value: p,
      typing: p.trim().length > 0,
    }),
}));
