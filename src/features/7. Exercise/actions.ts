import { createAction } from "@reduxjs/toolkit";

export type CalculationSymbol = "PLUS" | "MINUS" | "DIVIDE" | "MULTIPLY";

export enum Actions {
  setValue = "SET_VALUE",
  setType = "SET_TYPE",
  reset = "RESET_STATE",
  calculate = "CALCULATE",
}

export const setCalculationSymbol = createAction<CalculationSymbol>(
  Actions.setType
);
export const setValueAction = createAction<number>(Actions.setValue);
export const resetStateAction = createAction(Actions.reset);
export const calculateAction = createAction(Actions.calculate);
