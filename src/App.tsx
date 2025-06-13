import Hero from "./ui/Hero";
import Header from "./ui/Header";
import TextInput from "./ui/TextInput";


function App() {
  return (
    <div className="w-full h-dvh bg-background text-text font-display flex flex-col items-center justify-start gap-6">
      <Header />
      <div className="flex flex-col gap-24 max-w-[95%] xl:max-w-[75%]">
        <Hero />
        <TextInput />
      </div>
    </div>
  )
}

export default App
