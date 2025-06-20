import { useEffect } from "react";
import { useCharStore } from "../../useCharStore";
import clearText from "../assets/delete.svg";


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

    const handleClearText = () => {
        setUserText("");
        setSentenceCount(0);
        setWordCount(0);
        setCharCount(0);
    }


    return (
        <div className="w-full flex flex-col items-start justify-center text-text gap-2">
            <textarea
                name="text"
                value={userText}
                onChange={(e) => handleUserInput(e)}
                placeholder="Start typing or paste your text here"
                className="w-full bg-secondary min-h-64 p-2 rounded-md outline-0 border border-slate-500"
            >
            </textarea>
            {
                userText !== "" && (
                    <button
                        className="p-2 text-xs rounded-md flex items-center justify-center 
                                    gap-2 bg-secondary cursor-pointer
                                    transition-all duration-200 border border-slate-500
                                    hover:bg-slate-500"
                        onClick={() => handleClearText()}
                    >
                        <p>Clear text</p>
                        <img
                            src={clearText}
                            alt="clear text icon"
                            className="w-3"
                        />
                    </button>
                )
            }
        </div>
    );
}

export default TextInput;