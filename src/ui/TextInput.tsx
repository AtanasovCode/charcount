

const TextInput = () => {
    return (
        <div className="w-full flex items-center justify-center text-text">
            <textarea 
                name="text" 
                placeholder="Start typing or paste your text here"
                className="w-full bg-slate-700 min-h-48 p-4 rounded-md"
            >

            </textarea>
        </div>
    );
}

export default TextInput;