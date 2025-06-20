import { useCharStore } from "../useCharStore";

import Hero from "./ui/Hero";
import Header from "./ui/Header";
import TextInput from "./ui/TextInput";
import ChartContainer from "./ui/ChartContainer";
import Stats from "./ui/Stats";


function App() {

  const { wordCount, charCount } = useCharStore();

  return (
    <div className="w-full min-h-dvh bg-background px-2 py-8 md:py-10 lg:py-12 xl:py-16 md:px-6 text-text font-display flex flex-col items-center justify-start gap-8">
      <div className="flex flex-col items-center justify-center gap-12 w-full xl:w-2/3">
        <Hero />
        <div className="w-full flex flex-col items-start justify-center gap-4">
          <TextInput />
          <Stats />
        </div>
        <ChartContainer />
      </div>
    </div>
  )
}

export default App
