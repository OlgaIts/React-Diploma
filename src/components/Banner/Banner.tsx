import {memo} from "react";
import {Title} from "../Title";
import img from "../../img/banner.jpg";
import styles from "./Banner.module.scss";

export const Banner = memo(() => {
  return (
    <div className={styles.banner}>
      <img src={img} className={styles["img-fluid"]} alt='К весне готовы!' />
      <Title tag='h2' className={styles["banner-header"]}>
        К весне готовы!
      </Title>
    </div>
  );
});

Banner.displayName = "Banner";
