import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { calculatorReducer, CalculatorState } from "./reducer";

//DEV TOOLS
//https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

export type RootExerciseState = {
  calculator: CalculatorState;
};

const rootReducer = combineReducers<RootExerciseState>({
  calculator: calculatorReducer,
});

export const exerciseStore = configureStore({
  reducer: rootReducer,
  devTools: true,
});
