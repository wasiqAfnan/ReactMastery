import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./redux/features/counterFeature";
import { useState } from "react";
import "./App.css"

function App() {
  const [number, setNumber] = useState(0);
  // step 6: setting dispatch and counter
  // dispatch is to dispatch any action from the file to update the current state
  // selector is used to get the latest value of the order after updating the value from the store

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div className="app">
      <div className="card">
        <h1 className="count">{counter}</h1>

        {/* step7: calling the reducer function when user click the button using disptch hook*/}
        <div className="buttons">
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>

        <div className="input-group">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter number"
          />
          <button onClick={() => dispatch(incrementByAmount(Number(number)))}>
            Increment By Amount
          </button>
          <button onClick={() => dispatch(decrementByAmount(Number(number)))}>
            Decrement By Amount
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
