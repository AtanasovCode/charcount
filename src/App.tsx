import { useCharStore } from "../useCharStore";

function App() {

  const {
    bears
  } = useCharStore();

  return (
    <div className="w-full h-dvh bg-black">
      <div className="font-bold text-3xl text-white">
        {bears}
      </div>
    </div>
  )
}

export default App
