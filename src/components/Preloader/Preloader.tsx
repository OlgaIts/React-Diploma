import {memo} from "react";
import styles from "./Preloader.module.scss";

export const Preloader = memo(() => {
  return (
    <div className={styles.preloader}>
      {[...Array(4)].map((_, index) => (
        <span key={index} className={styles.item}></span>
      ))}
    </div>
  );
});
Preloader.displayName = "Preloader";
