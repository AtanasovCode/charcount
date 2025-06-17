import { useEffect } from "react";
import {
    BarChart,
    Bar,
    YAxis,
    XAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { useCharStore } from "../../useCharStore";

const Chart = () => {

    const {
        userText,
        wordCount,
        setCharAnalysis,
        wordAnalysis,
        setWordAnalysis,
        showFullAnalysis,
    } = useCharStore();

    // 
    const getUniqueWordsCount = () => {
        return wordAnalysis?.length || 0;
    }

    const getBarHeight = () => {
        const barHeight: number = 30;
        return wordAnalysis ? barHeight : 0;
    }

    const getChartHeightBasedOnWordCount = () => {
        const uniqueWordsCount = getUniqueWordsCount();
        const count = showFullAnalysis ? uniqueWordsCount : Math.min(uniqueWordsCount, 15);
        if (count === 0) return 0; // return if there are no words

        const barHeight: number = getBarHeight(); // individual bar height
        const idealHeightMultiplier = barHeight * 1.1; // give 110% space for each bar

        return count * idealHeightMultiplier;
    }

    const countWords = () => {
        const text = userText.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
        const obj: Record<string, number> = {};

        text.forEach((word) => {
            obj[word] = (obj[word] || 0) + 1;
        })

        const sortedWords: any = Object.entries(obj).map(([word, count]) => ({
            word,
            count
        })).sort((a: any, b: any) => b.count - a.count);

        setWordAnalysis(sortedWords);
    }

    useEffect(() => {
        countWords();
    }, [userText])

    const calculateWordPercentage = (value: number) => {
        if (!wordCount) return;
        const percent = (value * 100) / wordCount;

        return percent.toFixed(2);
    }

    return (
        <ResponsiveContainer
            width="100%"
            height={getChartHeightBasedOnWordCount()}
        >
            <BarChart
                data={wordAnalysis ? (showFullAnalysis ? wordAnalysis : wordAnalysis.slice(0, 15)) : []}
                layout="vertical"
            >
                <YAxis
                    type="category"
                    dataKey="word"
                    tick={{ fill: "#FFFFFF", fontSize: "13px" }}
                />
                <XAxis
                    type="number"
                    dataKey="count"
                    tick={{ fill: "#FFFFFF" }}
                    tickFormatter={(value) => Math.floor(value).toString()}
                    domain={[0, (dataMax: any) => dataMax * 1.05]}
                />
                <Bar
                    dataKey={"count"}
                    fill="hsl(242, 100%, 83%)"
                    maxBarSize={getBarHeight()}
                    radius={6}
                    label={({ x, y, width, height, value }) => (
                        <text
                            x={x + width + 24}
                            y={y + height / 2}
                            fill="#fff"
                            fontSize={13}
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            {calculateWordPercentage(value)}%
                        </text>
                    )}
                />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Chart;