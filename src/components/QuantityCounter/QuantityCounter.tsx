import { ChangeEvent, useState } from 'react';
import styles from './QuantityCounter.module.scss';

interface QuantityCounterProps {
  onChange: (count: number) => void;
}

export const QuantityCounter = ({ onChange }: QuantityCounterProps) => {
  const [count, setCount] = useState(1);

  const dec = () => {
    if (count > 0) {
      onChange(count - 1);
      setCount(count - 1);
    }
  };

  const inc = () => {
    if (count < 10) {
      onChange(count + 1);
      setCount(count + 1);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > 0 && Number(e.target.value) < 10) {
      setCount(Number(e.target.value));
      onChange(Number(e.target.value));
    }
    if (Number(e.target.value) < 1) {
      setCount(1);
      onChange(1);
    }
    if (Number(e.target.value) > 10) {
      setCount(10);
      onChange(10);
    }
  };

  return (
    <>
      <button className={styles.btn} onClick={dec}>
        -
      </button>
      <input
        className={styles.input}
        type='number'
        value={count}
        onChange={handleChange}
      />
      <button className={styles.btn} onClick={inc}>
        +
      </button>
    </>
  );
};
