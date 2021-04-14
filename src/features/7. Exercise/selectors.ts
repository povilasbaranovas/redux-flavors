import { RootExerciseState } from "./exerciseStore";

export const selectInputValue = (state: RootExerciseState) =>
  state.calculator.inputValue;
