import {memo} from "react";
import {Link} from "react-router-dom";
import {Nav} from "../Nav/Nav";
import logo from "../../img/header-logo.png";
import styles from "./Header.module.scss";

export const Header = memo(() => {
  return (
    <header className={styles.component}>
      <div className={styles.wrapper}>
        <Link to='/'>
          <img src={logo} alt='Logo Bosa Noga' />
        </Link>
        <Nav />
      </div>
      <div>
        <div className={styles["header-controls-pics"]}>
          <div
            className={`${styles["header-controls-pic"]} ${styles["header-controls-search"]}`}
          ></div>
          <div
            className={`${styles["header-controls-pic"]} ${styles["header-controls-cart"]}`}
          >
            <div className={styles["header-controls-cart-full"]}>1</div>
            <div className={styles["header-controls-cart-menu"]}></div>
          </div>
        </div>
        {/* <form
                  data-id='search-form'
                  className={`${styles["header-controls-search-form"]} ${styles[" form-inline invisible"]}`}
                >
                  <input
                    className={styles["form-control"]}
                    placeholder='Поиск'
                  />
                </form> */}
      </div>
    </header>
  );
});
Header.displayName = "Header";
