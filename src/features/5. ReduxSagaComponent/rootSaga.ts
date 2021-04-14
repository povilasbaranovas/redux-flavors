import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeEvery, call, put } from "redux-saga/effects";
import {
  addActionCreator,
  getNumberActionCreator,
  GetNumberType,
} from "./actions";

export function fetchNumber(type: GetNumberType) {
  return new Promise<number>((resolve) =>
    setTimeout(() => resolve(type === "EVEN" ? 2 : 3), 1000)
  );
}

export function* selectProductSaga(action: PayloadAction<GetNumberType>) {
  const response: number = yield call(fetchNumber, action.payload);
  yield put(addActionCreator(response));
}

function* numberIncrementSaga() {
  yield takeEvery(getNumberActionCreator, selectProductSaga);
}

export default function* rootSaga(): Generator {
  yield all([numberIncrementSaga()]);
}
