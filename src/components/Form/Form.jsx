import styles from "./Form.module.css";
import { v4 as uuidv4 } from "uuid";

export function Form({ onClick, onClickReset, counters }) {
  const onClickAdd = () => {
    const newCounter = {
      id: uuidv4(),
      count: 0,
    };

    onClick(newCounter);
  };

  const sumCounts = () => {
    return counters.reduce((acc, item) => acc + item.count, 0);
  };

  return (
    <div className={styles.app}>
      <div className={styles.buttons_container}>
        <button className={styles.button} onClick={onClickAdd}>
          New Counter
        </button>
        <button className={styles.button} onClick={onClickReset}>
          Clear all
        </button>
      </div>
      <div className={styles.info_container}>
        <p className={styles.info_subtitle}>Amount of counters: {counters.length}</p>
        <p className={styles.info_subtitle}>Value of counters: {sumCounts()}</p>
      </div>
    </div>
  );
}
