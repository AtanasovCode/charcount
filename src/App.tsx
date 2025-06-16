import { useCharStore } from "../useCharStore";

import Hero from "./ui/Hero";
import Header from "./ui/Header";
import TextInput from "./ui/TextInput";
import Chart from "./ui/Chart";
import InfoBox from "./ui/InfoBox";
import Stats from "./ui/Stats";


function App() {

  const { wordCount, charCount } = useCharStore();

  return (
    <div className="w-full min-h-dvh bg-background px-6 text-text font-display flex flex-col items-center justify-start gap-8">
      <Header />
      <div className="w-full flex items-start justify-start">
        <div className="hidden xl:flex xl:flex-1/5">
          <InfoBox />
        </div>
        <div className="w-full xl:flex-3/4 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-16 w-full xl:w-5/6">
            <Hero />
            <TextInput />
            <Stats />
            <Chart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
