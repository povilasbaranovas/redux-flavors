import { combineReducers, createStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension";

type Action = { type: string; payload: number };
export type RootReduxState = {
  A: {
    number: number;
  };
};

const initialState = {
  number: 0,
};

const reducerA = (state = initialState, action: Action) => {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return { ...state, number: state.number + action.payload };
    case "DELETE":
      return { ...state, number: state.number - action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers<RootReduxState>({
  A: reducerA,
});

export const reduxStore = createStore(rootReducer, devToolsEnhancer({}));
