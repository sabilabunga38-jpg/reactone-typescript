import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const tambah = () => {
    setCount(count + 1);
  };

  const kurang = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2>React Counter</h2>

      <h1>{count}</h1>

      <div className="button-group">
        <button onClick={kurang}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={tambah}>+</button>
      </div>
    </div>
  );
}

export default Counter;