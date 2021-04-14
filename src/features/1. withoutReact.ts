type Action = { type: string; payload: number };

const initialState = {
  number: 0,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
};

const action: Action = {
  type: "ADD",
  payload: 2,
};

const newState = reducer(initialState, action);
console.log(newState);
const newState2 = reducer(newState, action);
console.log(newState2);

const addActionCreator = (payload: number): Action => ({
  type: "ADD",
  payload,
});

const addFive = addActionCreator(5);
console.log(addFive);

const newState3 = reducer(newState2, addFive);
console.log(newState3);

export default null;
