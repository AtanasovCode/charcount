import { useCharStore } from "../../useCharStore";
import StatContainer from "./StatContainer";

const Stats = () => {

    const {
        sentenceCount,
        wordCount,
        charCount,
    } = useCharStore();

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2">
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
                color="green"
            />
        </div>
    );
}

export default Stats;