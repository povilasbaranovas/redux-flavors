import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice";

export const reduxToolkitStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof reduxToolkitStore.dispatch;
export type RootState = ReturnType<typeof reduxToolkitStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
