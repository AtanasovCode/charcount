import { create } from 'zustand'

interface charStore {
    bears: number
    increase: (by: number) => void
}

export const useCharStore = create<charStore>()((set) => ({
    bears: 32,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
}))