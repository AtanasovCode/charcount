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
        charAnalysis,
        setCharAnalysis,
        wordAnalysis,
        setWordAnalysis,
    } = useCharStore();

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
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={charAnalysis ? charAnalysis : []}
                layout="vertical"
            >
                <YAxis
                    type="category"
                    dataKey="char"
                    tick={{ fill: "#FFFFFF" }}
                />
                <XAxis
                    type="number"
                    dataKey="count"
                    tick={{ fill: "#FFFFFF" }}
                />
                <Bar dataKey={"count"} fill="#a9d1c3" />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Chart;