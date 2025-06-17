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
    sentenceCount: number | null;
    setSentenceCount: (count: number | null) => void;

    wordAnalysis: charType[] | null;
    setWordAnalysis: (value: charType[]) => void;

    charAnalysis: charType[] | null;
    setCharAnalysis: (value: charType[]) => void;

    showFullAnalysis: boolean;
    setShowFullAnalysis: (value: boolean) => void;
    visibleBars: number;
    setVisibleBars: (bars: number) => void;
}

export const useCharStore = create<charStore>()((set) => ({
    userText: "",
    setUserText: (text: string) => set({ userText: text }),
    charCount: null,
    setCharCount: (value: number) => set({ charCount: value }),
    wordCount: null,
    setWordCount: (value: number) => set({ wordCount: value }),
    sentenceCount: null,
    setSentenceCount: (count: number | null) => set({ sentenceCount: count }),

    wordAnalysis: null,
    setWordAnalysis: (analysis: charType[]) => set({ wordAnalysis: analysis }),
    charAnalysis: null,
    setCharAnalysis: (analysis: charType[]) => set({ charAnalysis: analysis }),

    showFullAnalysis: false,
    setShowFullAnalysis: (value: boolean) => set({showFullAnalysis: value }),
    visibleBars: 0,
    setVisibleBars: (bars: number) => set({ visibleBars: bars }),
}))