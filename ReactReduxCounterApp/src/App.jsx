import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/features/counterFeature";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  // step 6: setting dispatch and counter
  // dispatch is to dispatch any action from the file to update the current state
  // selector is used to get the latest value of the order after updating the value from the store

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <>
      <h1>{counter}</h1>
      <div>
        {/* step7: calling the reducer function when user click the button using disptch hook*/}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        <button onClick={() => dispatch(incrementByAmount(Number(number)))}>
          Increment By Amount
        </button>
      </div>
    </>
  );
}

export default App;
