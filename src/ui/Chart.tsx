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
    } = useCharStore();

    const countChars = () => {
        const text = userText.replace(/\s/g, "");
        const obj: Record<string, number> = {};

        for(const char of text) {
            obj[char] = (obj[char] || 0) + 1;
        }

        const temp = Object.entries(obj).map(([char, count]) => ({
            char,
            count
        }))

        temp.sort((a, b) => b.count - a.count);
        setCharAnalysis(temp);
    }

    useEffect(() => {
        countChars();
    }, [userText])

    return (
        <ResponsiveContainer  width="100%" height={400}>
            <BarChart 
                data={charAnalysis ? charAnalysis : []} 
                layout="vertical"
            >
                <YAxis 
                    type="category" 
                    dataKey="char"
                    tick={{ fill: "#FFFFFF" }}
                />
                <XAxis type="number" dataKey="count" />
                <Bar dataKey={"count"} fill="#a9d1c3" />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Chart;