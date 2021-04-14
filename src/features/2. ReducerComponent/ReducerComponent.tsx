import { useState } from "react";

type Action = { type: string; payload: number };

const initialState = {
  number: 0,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
};

const addActionCreator = (payload: number): Action => ({
  type: "ADD",
  payload,
});

export const ReducerComponent = () => {
  const count = 5;
  const addFiveAction = addActionCreator(count);
  const [state, updateState] = useState(initialState);
  return (
    <div>
      Manual reducer component
      <div>
        <pre>{state.number}</pre>
      </div>
      <button onClick={() => updateState(reducer(state, addFiveAction))}>
        Add {count}
      </button>
    </div>
  );
};
