import { useState } from "react";
import { Counter } from "../Counter/Counter";
import { Form } from "../Form/Form";
import styles from "./CounterList.module.css";

export function CounterList() {
  const [counters, setCounters] = useState([]);

  const onClickAdd = (newCounter) => {
    let newCounters = [...counters, newCounter];

    newCounters.map((item) => {
      if (item.count % 2 === 0 && item.count > 0) {
        item.count++;
        return item;
      }
      return item;
    });
    setCounters(newCounters);
  };

  const onClickResetCounters = () => {
    setCounters([]);
  };

  const onClickDelete = (id) => {
    let newCounters = counters.filter((item) => item.id !== id);
    newCounters.map((item) => {
      if (item.count % 2 !== 0 && item.count > 0) {
        item.count--;
        return item;
      }
      return item;
    });
    setCounters(newCounters);
  };

  const onClickPlus = (id) => {
    const newCounter = counters.map((item) => {
      if (item.id === id) {
        item.count++;
        return item;
      }
      return item;
    });
    setCounters(newCounter);
  };

  const onClickMinus = (id) => {
    const newCounter = counters.map((item) => {
      if (item.id === id) {
        item.count > 0 ? item.count-- : (item.count = 0);
        return item;
      }
      return item;
    });
    setCounters(newCounter);
  };

  const onClickReset = (id) => {
    const newCounter = counters.map((item) => {
      if (item.id === id) {
        item.count = 0;
        return item;
      }
      return item;
    });
    setCounters(newCounter);
  };

  return (
    <div className={styles.container}>
      <Form
        onClick={onClickAdd}
        onClickReset={onClickResetCounters}
        counters={counters}
      />
      <div className={styles.counter_container}>
        {counters.map((item) => {
          return (
            <Counter
              key={item.id}
              id={item.id}
              count={item.count}
              onClickDelete={onClickDelete}
              onClickPlus={onClickPlus}
              onClickMinus={onClickMinus}
              onClickReset={onClickReset}
            />
          );
        })}
      </div>
    </div>
  );
}