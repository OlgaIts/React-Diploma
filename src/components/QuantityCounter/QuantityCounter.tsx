import {useEffect, useState} from "react";
import styles from "./QuantityCounter.module.scss";

interface QuantityCounterProps {
  onChange: (count: number) => void;
}

export const QuantityCounter = ({onChange}: QuantityCounterProps) => {
  const [count, setCount] = useState(1);

  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const inc = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    onChange?.(count);
  }, [count]);

  return (
    <>
      <button className={styles.btn} onClick={dec}>
        -
      </button>
      <input
        className={styles.input}
        type='number'
        value={count}
      />
      <button className={styles.btn} onClick={inc}>
        +
      </button>
    </>
  );
};
