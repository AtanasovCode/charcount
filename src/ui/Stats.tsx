import { useCharStore } from "../../useCharStore";
import StatContainer from "./StatContainer";

const Stats = () => {

    const {
        wordCount,
        charCount,
    } = useCharStore();

    return (
        <div className="w-full flex flex-col items-start justify-center gap-6">
            <div className="font-bold text-xl">
                Stats
            </div>
            <div className="w-full flex items-center justify-center gap-4">
                <StatContainer
                    title="Word Count"
                    value={wordCount}
                    color="primary"
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