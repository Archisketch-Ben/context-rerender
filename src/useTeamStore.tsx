import { create } from "zustand";

type Members = string[];

type BarcaState = {
  barca: Members;
  addPlayer: (player: string) => void;
  removePlayer: (player: string) => void;
};

type MadridState = {
  madrid: Members;
  addPlayer: (player: string) => void;
  removePlayer: (player: string) => void;
};

export const useBarcaTeamStore = create<BarcaState>((set) => ({
  barca: ["messi", "suarez", "neymar"],
  addPlayer: (player) => set((state) => ({ barca: [...state.barca, player] })),
  removePlayer: (player) =>
    set((state) => ({ barca: state.barca.filter((p) => p !== player) })),
}));

export const useMadridTeamStore = create<MadridState>((set) => ({
  madrid: ["ronaldo", "bale", "modric"],
  addPlayer: (player) =>
    set((state) => ({ madrid: [...state.madrid, player] })),
  removePlayer: (player) =>
    set((state) => ({ madrid: state.madrid.filter((p) => p !== player) })),
}));
