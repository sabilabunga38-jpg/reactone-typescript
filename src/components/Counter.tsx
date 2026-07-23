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
      <div className="button-group">
        <button onClick={tambah}>+</button>

        <span className="count-number">{count}</span>

        <button onClick={kurang}>-</button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;