import { create } from "zustand";

// Описуємо типи для TypeScript
interface UserState {
  userName: string;
  isModalOpen: boolean;
  setUserName: (name: string) => void;
  openModal: () => void;
  closeModal: () => void;
}

export const useStore = create<UserState>((set) => ({
  userName: "",
  isModalOpen: false,

  setUserName: (name) => set({ userName: name }),

  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));
