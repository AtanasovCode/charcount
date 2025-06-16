import { useEffect } from "react";
import { useCharStore } from "../../useCharStore";

const TextInput = () => {

    const {
        userText,
        setUserText,
        setCharCount,
        setWordCount,
        setSentenceCount,
    } = useCharStore();

    const handleUserInput = (e: any) => {
        const value = e.currentTarget.value;
        setUserText(value);
        setCharCount(value.trim().length);
        setWordCount(value.trim().split(/\s+/).filter(Boolean).length);
        setSentenceCount(value.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|!|\?)\s/g).length)
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