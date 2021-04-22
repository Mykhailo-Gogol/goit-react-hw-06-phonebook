import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(value);

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch({ type: "counter/decrement", payload: 1 })}
      >
        -
      </button>
      <span>{value}</span>
      <button
        type="button"
        onClick={() => dispatch({ type: "counter/increment", payload: 1 })}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
