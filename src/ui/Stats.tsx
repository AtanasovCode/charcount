import { useCharStore } from "../../useCharStore";
import StatContainer from "./StatContainer";

const Stats = () => {

    const {
        sentenceCount,
        wordCount,
        charCount,
    } = useCharStore();

    return (
        <div className="w-full flex flex-col items-start justify-center gap-2">
            <div className="font-bold text-2xl">
                Stats
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
                <StatContainer
                    title="Sentence Count"
                    value={sentenceCount}
                    color="accent"
                />
                <StatContainer
                    title="Word Count"
                    value={wordCount}
                    color="orange"
                />
                <StatContainer
                    title="Character Count"
                    value={charCount}
                    color="secondary"
                />
            </div>
        </div>
    );
}

export default Stats;