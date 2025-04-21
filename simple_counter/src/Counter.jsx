import React from "react";
import "./Counter.css";

const Counter = ({ count, setCount }) => {
  return (
    <div className="buttons">
      <button
        className="plus"
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        {" "}
        +{" "}
      </button>
      <button
        className="reset"
        onClick={() => setCount((prevState) => (prevState = 0))}
      >
        Reset
      </button>
      <button
        className="minus"
        onClick={() => setCount((prevState) => prevState - 1)}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
};

export default Counter;
