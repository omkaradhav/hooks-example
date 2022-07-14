import React, { useReducer } from "react";
import Header from "./Component/Header";
import "./App.css";

const initialstate = 0;

const Reducer = (state, Action) => {
  if (Action.type === "INCREAMENT") {
    return state + 1;
  }

  if (Action.type === "DECREAMENT") {
    return state - 1;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(Reducer, initialstate);
  return (
    <>
      <Header />

      <div className="reducer">
        <div>UseReducer</div>

        <div>
          <p>{state}</p>

          <button onClick={() => dispatch({ type: "INCREAMENT" })}>INC</button>
          <button onClick={() => dispatch({ type: "DECREAMENT" })}>DEC</button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
