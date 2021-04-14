import { Provider, useDispatch, useSelector } from "react-redux";

import { reduxStore, RootReduxState } from "./reduxStore";

type Action = { type: string; payload: number };

const actionCreator = (type: string, payload: number): Action => ({
  type,
  payload,
});

const actionCreatorFactory = (type: string) => (payload: number): Action => ({
  type,
  payload,
});

const addFiveAction = actionCreator("ADD", 5);
const deleteAction = actionCreatorFactory("DELETE");

export const PureReduxComponent = () => {
  return (
    <Provider store={reduxStore}>
      <ChildComponent />
    </Provider>
  );
};

const ChildComponent = () => {
  const dispatch = useDispatch();
  const number = useSelector<RootReduxState>(
    (state) => state.A.number
  ) as number;

  return (
    <>
      <div>
        Redux component
        <pre>{number}</pre>
      </div>
      <button onClick={() => dispatch(addFiveAction)}>Add 3</button>
      <button onClick={() => dispatch(deleteAction(5))}>Delete</button>
    </>
  );
};
// export const ChildComponent = () => {
//   return (
//     <>
//       <div>
//         <pre>{state.number}</pre>
//       </div>
//       <button onClick={() => dispatch(addFiveAction)}>Add {count}</button>
//     </>
//   );
// };
