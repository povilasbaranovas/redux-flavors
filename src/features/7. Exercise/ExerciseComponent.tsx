import { Provider, useDispatch, useSelector } from "react-redux";
import { setValueAction } from "./actions";
import { exerciseStore } from "./exerciseStore";
import { selectInputValue } from "./selectors";
import styles from "./Exercise.module.css";

export const ExerciseComponent = () => {
  return (
    <Provider store={exerciseStore}>
      <ChildComponent />
    </Provider>
  );
};

const ChildComponent = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectInputValue);

  return (
    <div className={styles.container}>
      <section className={styles.calculations}>
        23123213 / 23123123 = result
        {/* 
          Value entered before calculation button was pressed should be shown here followed by a symbol.
          After CALCULATE is pressed second value and calculation result should also be shown
          */}
      </section>
      <section>
        <input
          className={styles.input}
          type="number"
          value={value}
          onChange={(e) => dispatch(setValueAction(parseFloat(e.target.value)))} //This is overkill a bit and needs debouncing, but its a good demo that redux can be quite faste
        />
      </section>
      <section className={styles.buttons}>
        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>*</button>
        <button className={styles.calculate}>Calculate</button>
      </section>
    </div>
  );
};
