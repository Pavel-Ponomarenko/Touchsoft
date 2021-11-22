import { useState } from "react";
import styles from "./Counter.module.css";

export function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");

  const checkType = (count) => {
    if (count === 0) setColor("blue");
    count % 2 === 0 ? setColor("yellow") : setColor("green");
  };

  const onClickPlus = () => {
    setCount(count + 1);
    checkType(count);
  };

  const onClickMinus = () => {
    count > 0 ? setCount(count - 1) : alert("It cant be less then 0");
    checkType(count);
  };

  const onClickReset = () => {
    setCount(0);
    setColor("blue");
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={
          color === "blue"
            ? styles.counter_container__zero
            : color === "yellow"
            ? styles.counter_container__odd
            : styles.counter_container__even
        }
      >
        <p className={styles.counter_value}>{count}</p>
        <p className={styles.counter_value}>
          {count === 0
            ? "It is zero"
            : count % 2 === 0
            ? "It is even"
            : "It is odd"}
        </p>
        <div className={styles.button_container}>
          <button className={styles.counter_button} onClick={onClickMinus}>
            -
          </button>
          <button className={styles.counter_button} onClick={onClickReset}>
            C
          </button>
          <button className={styles.counter_button} onClick={onClickPlus}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
