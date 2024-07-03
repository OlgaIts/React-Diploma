import {NavLink} from "react-router-dom";
import styles from "./Nav.module.scss";

export const Nav = () => {
  const navItems = [
    {label: "Главная", link: "/"},
    {label: "Каталог", link: "/catalog"},
    {label: "О магазине", link: "/about"},
    {label: "Контакты", link: "/contacts"},
  ];

  return (
    <ul className={styles.nav}>
      {navItems.map(({label, link}) => (
        <li key={label}>
          <NavLink
            to={link}
            className={({isActive}: {isActive: boolean}) =>
              isActive ? styles.active : ""
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
