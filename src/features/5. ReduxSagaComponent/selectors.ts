import { RootReduxSagaState } from "./reduxSagaStore";

export const selectANumber = (state: RootReduxSagaState) => state.A.number;
export const selectALoading = (state: RootReduxSagaState) => state.A.loading;
