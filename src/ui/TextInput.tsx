import { useEffect } from "react";
import { useCharStore } from "../../useCharStore";

const TextInput = () => {

    const {
        userText,
        setUserText,
        charCount,
        setCharCount,
        setWordCount,
    } = useCharStore();

    const handleUserInput = (e: any) => {
        const value = e.currentTarget.value;
        setUserText(value);
        setCharCount(value.trim().length);
        setWordCount(value.trim().split(/\s+/).filter(Boolean).length);
    };

    const countString = (string: string) => {
        const obj: any = {};
        for (const char of string) {
            obj[char] = (obj[char] || 0) + 1;
        }
        return obj;
    };


    return (
        <div className="w-full flex items-center justify-center text-text">
            <textarea
                name="text"
                value={userText}
                onChange={(e) => handleUserInput(e)}
                placeholder="Start typing or paste your text here"
                className="w-full bg-secondary min-h-48 p-4 rounded-md outline-0"
            >

            </textarea>
        </div>
    );
}

export default TextInput;