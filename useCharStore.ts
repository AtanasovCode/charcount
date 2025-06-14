import { create } from 'zustand'

interface charStore {
    userText: string;
    setUserText: (value: string) => void;
    charCount: number | null;
    setCharCount: (value: number) => void;
    wordCount: number | null;
    setWordCount: (value: number) => void;
    textAnalysis: string[] | null;
}

export const useCharStore = create<charStore>()((set) => ({
    userText: "",
    setUserText: (text: string) => set({ userText: text }),
    charCount: null,
    setCharCount: (value: number) => set({ charCount: value }),
    wordCount: null,
    setWordCount: (value: number) => set({ wordCount: value }),

    textAnalysis: null,
}))