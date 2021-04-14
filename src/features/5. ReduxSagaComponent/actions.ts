import { createAction } from "@reduxjs/toolkit";

export type GetNumberType = "EVEN" | "ODD";

export enum Actions {
  add = "ADD",
  getNumber = "GET_NUMBER",
}

export const addActionCreator = createAction<number>(Actions.add);
export const getNumberActionCreator = createAction<GetNumberType>(
  Actions.getNumber
);
