import { useState, useEffect } from "react";
import "./Counter.css";

function Counter() {
  const [value, setValue] = useState(0);

  function decrement() {
    setValue((v) => v - 1);
  }
  function reset() {
    setValue(0);
  }
  function increment() {
    setValue((v) => v + 1);
  }

  useEffect(() => {
    document.body.style.backgroundColor = "beige";
  }, []);

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>Demonstrates basic state management and user interaction</p>
      <div className="counter-container">
        <div className="countLabel">{value}</div>
        <div className="counter-buttons">
          <button onClick={decrement} id="decreaseButton">
            Decrease
          </button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment} id="increaseButton">
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
