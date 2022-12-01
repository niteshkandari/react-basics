import React, { useReducer } from "react";

const ReducerComponent = () => {
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          count: state.count - 1,
        };
      case "ADD_USER_GIVEN_VALUE":
        return {
          count: state.count + action.payload,
        };
      case "RESET":
        return {
          count: 0,
        };
      default:
        return state;
    }
  };
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUserGivenValue = () => {
    const usergivenValue = window.prompt("Enter number");
    if(usergivenValue) {
    dispatch({
      type: "ADD_USER_GIVEN_VALUE",
      payload: parseInt(usergivenValue),
    });
  };
};

  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={handleUserGivenValue}>
        increment by user given value
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
};

export default ReducerComponent;
