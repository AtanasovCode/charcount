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
        charAnalysis,
        setCharAnalysis,
        wordAnalysis,
        setWordAnalysis,
    } = useCharStore();

    const getBarHeight = () => {

        const count = wordAnalysis?.length || 0; // number of unique words
        if (count === 0) return 0; // return if there are no words

        if (count <= 3) return 60;
        if (count <= 20) return 40;
        if (count <= 60) return 30;
        return 20;
    }

    const getChartHeightBasedOnWordCount = () => {
        const count = wordAnalysis?.length || 0; // number of unique words
        if (count === 0) return 0; // return if there are no words

        const barHeight: number = getBarHeight();
        const idealHeightMultiplier = barHeight ? barHeight * 1.2 : 0;

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
        console.log(temp);
        setWordAnalysis(temp);
    }

    useEffect(() => {
        countChars();
        countWords();
    }, [userText])

    return (
        <ResponsiveContainer
            width="100%"
            height={getChartHeightBasedOnWordCount()}
        >
            <BarChart
                data={wordAnalysis ? wordAnalysis : []}
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
                    domain={[0, 'dataMax']}
                />
                <Bar
                    dataKey={"count"}
                    fill="#a9d1c3"
                    maxBarSize={getBarHeight()}
                />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Chart;