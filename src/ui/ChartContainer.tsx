import clsx from "clsx";
import { useCharStore } from "../../useCharStore";
import Chart from "./Chart";

const ChartContainer = () => {
    const {
        userText,
        wordAnalysis,
        showFullAnalysis,
        setShowFullAnalysis,
    } = useCharStore();

    const checkAnalysisLength = () => {
        if (!wordAnalysis) return false;
        return wordAnalysis.length > 20;
    };

    const shouldShowToggle = userText !== "" && checkAnalysisLength();

    return (
        <div className="w-full flex flex-col items-center justify-center text-text">
            <div className="w-full flex flex-col items-start justify-center mb-4">
                <div className="text-2xl font-bold">
                    Word Analysis
                </div>
                <div className={clsx(
                    "text-md text-slate-400",
                    {
                        "visible": userText === "",
                        "hidden": userText !== ""
                    }
                )}>
                    Start typing or input text to see word analysis
                </div>
            </div>
            <div className="w-full xl:w-[110%]">
                <Chart />
            </div>
            {shouldShowToggle && (
                <div
                    className="w-full flex items-center justify-start text-fancy text-sm underline cursor-pointer"
                    onClick={() => setShowFullAnalysis(!showFullAnalysis)}
                >
                    {showFullAnalysis ? (
                        <p>show less</p>
                    ) : (
                        <p>show more</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChartContainer;
