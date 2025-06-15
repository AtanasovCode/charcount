import { useCharStore } from "../useCharStore";

import Hero from "./ui/Hero";
import Header from "./ui/Header";
import TextInput from "./ui/TextInput";
import Chart from "./ui/Chart";


function App() {

  const { wordCount, charCount } = useCharStore();

  return (
    <div className="w-full min-h-dvh bg-background px-6 xl:px-12 text-text font-display flex flex-col items-center justify-start gap-12">
      <Header />
      <div className="w-full flex flex-col gap-16 xl:gap-24 xl:max-w-[40%]">
        <Hero />
        <TextInput />
      </div>
      <div className="w-full xl:max-w-[45%] bg-slate-700">
        <Chart />
      </div>
    </div>
  )
}

export default App
