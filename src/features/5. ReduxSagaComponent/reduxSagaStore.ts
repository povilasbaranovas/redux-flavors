import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducerA } from "./reducer";

//DEV TOOLS
//https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

export type RootReduxSagaState = {
  A: {
    number: number;
    loading: boolean;
  };
};

const rootReducer = combineReducers<RootReduxSagaState>({
  A: reducerA,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});

export const reduxStore = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
  )
);

sagaMiddleware.run(rootSaga);
