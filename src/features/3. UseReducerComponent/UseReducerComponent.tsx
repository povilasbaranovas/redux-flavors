import { useReducer } from "react";

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

export const UseReducerComponent = () => {
  const count = 5;
  const addFiveAction = addActionCreator(count);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Use reducer component
      <div>
        <pre>{state.number}</pre>
      </div>
      <button onClick={() => dispatch(addFiveAction)}>Add {count}</button>
    </div>
  );
};
