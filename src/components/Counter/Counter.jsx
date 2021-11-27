import styles from "./Counter.module.css";

export function Counter({
  count,
  id,
  onClickDelete,
  onClickPlus,
  onClickMinus,
  onClickReset,
}) {
  return (
    <div className={styles.counter_container}>
      <p className={styles.counter_value}>{count}</p>
      <div className={styles.button_container}>
        <button className={styles.button} onClick={() => onClickMinus(id)}>
          -
        </button>
        <button className={styles.button} onClick={() => onClickReset(id)}>
          C
        </button>
        <button className={styles.button} onClick={() => onClickPlus(id)}>
          +
        </button>
      </div>
      <button
        className={styles.button_delete}
        onClick={() => onClickDelete(id)}
      >
        &#10007;
      </button>
    </div>
  );
}
