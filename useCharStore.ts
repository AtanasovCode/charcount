import { create } from 'zustand'

type charType = {
    char: string,
    count: number,
}

interface charStore {
    userText: string;
    setUserText: (value: string) => void;
    charCount: number | null;
    setCharCount: (value: number) => void;
    wordCount: number | null;
    setWordCount: (value: number) => void;
    textAnalysis: string[] | null;

    charAnalysis: charType[] | null;
    setCharAnalysis: (value: charType[]) => void;
}

export const useCharStore = create<charStore>()((set) => ({
    userText: "",
    setUserText: (text: string) => set({ userText: text }),
    charCount: null,
    setCharCount: (value: number) => set({ charCount: value }),
    wordCount: null,
    setWordCount: (value: number) => set({ wordCount: value }),

    textAnalysis: null,
    charAnalysis: null,
    setCharAnalysis: (analysis: charType[]) => set({ charAnalysis: analysis }), 
}))