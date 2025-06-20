import { useEffect } from "react";
import {
    BarChart,
    Bar,
    YAxis,
    XAxis,
    ResponsiveContainer,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { useCharStore } from "../../useCharStore";

const Chart = () => {

    const {
        userText,
        wordCount,
        wordAnalysis,
        setWordAnalysis,
        showFullAnalysis,
        barColor,
    } = useCharStore();

    const getUniqueWordsCount = () => {
        return wordAnalysis?.length || 0;
    }

    const getBarHeight = () => {
        const wordCount = getUniqueWordsCount();

        if (wordCount === 0) return 0;
        if (wordCount <= 3) return 60;
        if (wordCount <= 6) return 50;
        if (wordCount <= 10) return 40;
        return 30;
    }

    const getChartHeightBasedOnWordCount = () => {
        const uniqueWordsCount = getUniqueWordsCount();
        const count = showFullAnalysis ? uniqueWordsCount : Math.min(uniqueWordsCount, 20);
        if (count === 0) return 0;

        const barHeight: number = getBarHeight();
        const idealHeightMultiplier = barHeight * 1.1;

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

    function CustomTooltip({ payload, label, active }: any) {
        if (active && payload && payload.length) {
            return (
                <div className="bg-secondary rounded-md p-4 flex flex-col items-start justify-center text-text">
                    <div className="flex items-center justify-center gap-1">
                        <div>
                            Word:
                        </div>
                        <div>
                            {label}
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <div>
                            Count:
                        </div>
                        <div>
                            {payload[0].value}
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    }

    return (
        <ResponsiveContainer
            width="100%"
            height={getChartHeightBasedOnWordCount()}
        >
            <BarChart
                data={wordAnalysis ? (showFullAnalysis ? wordAnalysis : wordAnalysis.slice(0, 20)) : []}
                layout="vertical"
                margin={{ top: 0, right: 40, bottom: 0, left: 0 }}
            >
                <CartesianGrid
                    strokeDasharray="3"
                    fill="blue"
                    fillOpacity={0.1}
                />

                <YAxis
                    type="category"
                    dataKey="word"
                    tick={{ fill: "#FFFFFF", fontSize: "13px" }}
                />
                <XAxis
                    type="number"
                    dataKey="count"
                    tick={{ fill: "#FFFFFF" }}
                    tickFormatter={(value) => (Number.isInteger(value) ? value : '')}
                    domain={[0, (dataMax: number) => Math.ceil(dataMax)]}
                />
                <Bar
                    dataKey={"count"}
                    fill={barColor}
                    maxBarSize={getBarHeight()}
                    radius={6}
                    label={({ x, y, width, height, value }) => (
                        <text
                            x={x + width + 22}
                            y={y + height / 2}
                            fill="#fff"
                            fontSize={12}
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            {calculateWordPercentage(value)}%
                        </text>
                    )}
                />
                <Tooltip content={<CustomTooltip />} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Chart;
