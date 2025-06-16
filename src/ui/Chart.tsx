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

    const getBarHeight = () => {

        const count = wordAnalysis?.length || 0; // number of unique words
        if (count === 0) return 0; // return if there are no words
        if (!showFullAnalysis) return 30;

        if (count <= 3) return 60;
        if (count <= 20) return 35;
        if (count <= 60) return 30;
        return 30;
    }

    const getChartHeightBasedOnWordCount = () => {
        const count = wordAnalysis?.length || 0; // number of unique words
        if (count === 0) return 0; // return if there are no words

        const barHeight: number = getBarHeight();
        const idealHeightMultiplier = barHeight ? barHeight * 1.2 : 0;

        // if only 10 bars are visible, multiple the bar height by 10
        if (!showFullAnalysis) return 15 * idealHeightMultiplier;
        return count * idealHeightMultiplier;
    }

    const countChars = () => {
        const text = userText.replace(/\s/g, "").toLowerCase();
        const obj: Record<string, number> = {};

        for (const char of text) {
            obj[char] = (obj[char] || 0) + 1;
        }

        const temp = Object.entries(obj).map(([char, count]) => ({
            char,
            count
        }))

        temp.sort((a, b) => b.count - a.count);
        setCharAnalysis(temp);
    }

    const countWords = () => {
        const text = userText.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
        const obj: Record<string, number> = {};

        text.map((word) => {
            obj[word] = (obj[word] || 0) + 1;
        })

        const temp: any = Object.entries(obj).map(([word, count]) => ({
            word,
            count
        }))

        temp.sort((a: any, b: any) => b.count - a.count);
        setWordAnalysis(temp);
    }

    useEffect(() => {
        countChars();
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
                    tick={{ fill: "#FFFFFF" }}
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
                    radius={32}
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