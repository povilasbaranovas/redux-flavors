import { createReducer } from "@reduxjs/toolkit";
import {
  calculateAction,
  CalculationSymbol,
  resetStateAction,
  setCalculationSymbol,
  setValueAction,
} from "./actions";

const initialState: CalculatorState = {
  values: {
    firstValue: undefined,
    secondValue: undefined,
  },
  inputValue: 0,
  symbol: undefined,
  //???????
};

export interface CalculatorState {
  inputValue: number;
  symbol?: CalculationSymbol;
  values: {
    firstValue?: number;
    secondValue?: number;
  };
  //???????
}

export const calculatorReducer = createReducer<CalculatorState>(
  initialState,
  (builder) => {
    builder
      // Galima nemutuoti state ir tiesiog grazinti ja is funkcijos kaip standartiniame reduceryje
      .addCase(setValueAction, (state, action) => ({
        ...state,
        number: action.payload,
      }))
      /* Taciau galima ir ja tiesiogiai modifikuoti nes naudojama immer biblioteka
        .addCase(setValueAction, (state, action) => {
          state.number = action.payload
        })
        */
      .addCase(setCalculationSymbol, (state, action) => ({ ...state }))
      .addCase(calculateAction, (state, action) => ({ ...state }))
      .addCase(resetStateAction, (state, action) => ({ ...state }));
  }
);
