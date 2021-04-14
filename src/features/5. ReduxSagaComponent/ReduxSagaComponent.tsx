import { Provider, useDispatch, useSelector } from "react-redux";
import { getNumberActionCreator } from "./actions";

import { reduxStore } from "./reduxSagaStore";
import { selectANumber, selectALoading } from "./selectors";

export const ReduxSagaComponent = () => {
  return (
    <Provider store={reduxStore}>
      <ChildComponent />
    </Provider>
  );
};

const ChildComponent = () => {
  const dispatch = useDispatch();
  const number = useSelector(selectANumber);
  const loading = useSelector(selectALoading);

  return (
    <>
      <div>
        Redux saga component
        <pre>{loading ? "LOADING" : number}</pre>
      </div>
      <button onClick={() => dispatch(getNumberActionCreator("EVEN"))}>
        Add even number
      </button>
      <button onClick={() => dispatch(getNumberActionCreator("ODD"))}>
        Add odd number
      </button>
    </>
  );
};
