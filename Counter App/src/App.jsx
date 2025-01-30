import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function decreaseHandler() {
    setCount(count - 1);
  }
  function increaseHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-[#214b45]">
      <div className="text-3xl font-medium text-[#bcd1ce]">
        Increment & Decrement
      </div>
      <div className="flex justify-center gap-12 bg-white py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={decreaseHandler}
          className="border-r-2 text-center border-[#bfbfbf] w-20 text-5xl"
        >
          -
        </button>
        <div className="text-center gap-12 text-5xl">{count}</div>
        <button
          onClick={increaseHandler}
          className="border-l-2 text-center border-[#bfbfbf] w-20 text-5xl"
        >
          +
        </button>
      </div>
      <button onClick={resetHandler} className="rounded-lg bg-blue-400 text-3xl py-2 px-4 font-medium text-[#222726]">Reset</button>
    </div>
  );
}

export default App;
