import { useState } from "react";

export default function Counter({ rotate, light }) {
  const [count, setCount] = useState(20);

  const addOne = () => {
    setCount(count + 1);
  };

  const subtractOne = () => {
    setCount(count - 1);
  };

  const resetCounter = () => {
    setCount(20);
  };

  return (
    <div className={`main ${rotate && "rotate"} ${light && "light"}`}>
      <h1>{count}</h1>
      <div className="buttonsContainer">
        <button className="button" onClick={() => subtractOne()}>
          -
        </button>
        <button className="button" onClick={() => addOne()}>
          +
        </button>
        <button className="button wide" onClick={() => resetCounter()}>
          Reset
        </button>
      </div>
    </div>
  );
}
