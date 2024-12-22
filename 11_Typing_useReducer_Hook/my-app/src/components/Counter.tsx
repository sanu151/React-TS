import React, { useReducer } from "react";

type State = {
  count: number;
};

const INCREMENT = "increment";
const INCREMENTBYAMOUNT = "incrementByAmount";
const DECREMENT = "decrement";
const RESET = "reset";
type Action =
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT }
  | { type: typeof RESET }
  | { type: typeof INCREMENTBYAMOUNT; payload: number };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case INCREMENTBYAMOUNT:
      return { count: state.count + action.payload };
    case RESET:
      return initialState;
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: INCREMENTBYAMOUNT, payload: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
    </div>
  );
};

export default Counter;
