import { Actions } from "./actions";

const initialState = {
  loading: false,
  number: 0,
};
type Action = { type: string; payload: number };

export const reducerA = (state = initialState, action: Action) => {
  switch (action.type) {
    case Actions.add:
      return {
        ...state,
        number: state.number + action.payload,
        loading: false,
      };
    case Actions.getNumber:
      return { ...state, loading: true };
    default:
      return state;
  }
};
