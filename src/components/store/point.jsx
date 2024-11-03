import { create } from 'zustand';

export const useStore = create((set) => ({
  point: 0,
  inc: (num) => set((state) => ({ point: state.point + num })),
  dec: (num) => set((state) => ({ point: state.point - num })),
}));
