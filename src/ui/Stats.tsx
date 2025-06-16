import { useCharStore } from "../../useCharStore";
import StatContainer from "./StatContainer";

const Stats = () => {

    const {
        wordCount,
        charCount,
    } = useCharStore();

    return (
        <div className="w-full flex items-center justify-center gap-4">
            <StatContainer
                title="Word Count"
                value={wordCount}
            />
            <StatContainer
                title="Character Count"
                value={charCount}
            />
        </div>
    );
}

export default Stats;