import {memo} from "react";
import styles from "./Header.module.scss";
import logo from "../../img/header-logo.png";

const menuItems = ["Главная", "Каталог", "О магазине", "Контакты"];

export const Header = memo(() => {
  return (
    <header className={styles.component}>
      <div className={styles.wrapper}>
        <a href='/'>
          <img src={logo} alt='Bosa Noga' className={styles["navbar-brand"]} />
        </a>
        <nav className={styles.navbar}>
          <ul className={styles["navbar-nav"]}>
            {menuItems.map((item) => (
              <li key={item} className={styles["nav-item"]}>
                <a className={styles["nav-link"]} href='/'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
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
