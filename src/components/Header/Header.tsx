import {memo} from "react";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/reduxHooks";
import {RootState} from "../../app/redux/store";
import {Nav} from "../Nav/Nav";
import {HeaderSearchInput} from "../HeaderSearchInput";
import logo from "../../img/header-logo.png";
import styles from "./Header.module.scss";

export const Header = memo(() => {
  const items = useAppSelector((state: RootState) => state.cart.items);
  const numberOfItems = items.length;

  return (
    <header className={styles.header}>
      <div className={styles.nav_wrapper}>
        <Link to='/'>
          <img src={logo} alt='Logo Bosa Noga' />
        </Link>
        <Nav />
      </div>
      <div>
        <div className={styles.icons_wrapper}>
          <HeaderSearchInput />
          <Link to='/cart' className={styles.cart}>
            {numberOfItems > 0 && (
              <span className={styles.cart_full}>{numberOfItems}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
});
Header.displayName = "Header";
