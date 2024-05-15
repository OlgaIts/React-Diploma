import {memo} from "react";
import {Title} from "../Title";
import styles from "./Footer.module.scss";

export const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <section className={styles.col}>
        <Title tag='h5'>Информация</Title>
        <ul className={`${styles.nav} ${styles["flex-column"]}`}>
          <li className={styles["nav-item"]}>
            <a href='/about.html' className={styles["nav-link"]}>
              О магазине
            </a>
          </li>
          <li className={styles["nav-item"]}>
            <a href='/catalog.html' className={styles["nav-link"]}>
              Каталог
            </a>
          </li>
          <li className={styles["nav-item"]}>
            <a href='/contacts.html' className={styles["nav-link"]}>
              Контакты
            </a>
          </li>
        </ul>
      </section>
      <div className={styles.col}>
        <section>
          <Title tag='h5'>Принимаем к оплате:</Title>
          <div className={styles["footer-pay"]}>
            <div
              className={`${styles["footer-pay-systems"]} ${styles["footer-pay-systems-paypal"]}`}
            ></div>
            <div
              className={`${styles["footer-pay-systems"]} ${styles["footer-pay-systems-master-card"]}`}
            ></div>
            <div
              className={`${styles["footer-pay-systems"]} ${styles["footer-pay-systems-visa"]}`}
            ></div>
            <div
              className={`${styles["footer-pay-systems"]} ${styles["footer-pay-systems-yandex"]}`}
            ></div>
            <div
              className={`${styles["footer-pay-systems"]} ${styles["footer-pay-systems-webmoney"]}`}
            ></div>
            <div
              className={`${styles["footer-pay-systems"]} ${styles["footer-pay-systems-qiwi"]}`}
            ></div>
          </div>
        </section>
        <section>
          <div className={styles["footer-copyright"]}>
            2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
            аксессуаров. Все права защищены.
            <br />
            Доставка по всей России!
          </div>
        </section>
      </div>

      <section
        className={`${styles.col} ${styles["text-right"]} ${styles["footer-contacts"]}`}
      >
        <Title tag='h5'>Контакты:</Title>
        <a className={styles["footer-contacts-phone"]} href='tel:+74957903503'>
          +7 495 79 03 5 03
        </a>
        <span className={styles["footer-contacts-working-hours"]}>
          Ежедневно: с 09-00 до 21-00
        </span>
        <a
          className={styles["footer-contacts-email"]}
          href='mailto:office@bosanoga.ru'
        >
          office@bosanoga.ru
        </a>
        <div className={styles["footer-social-links"]}>
          <div
            className={`${styles["footer-social-link"]} ${styles["footer-social-link-twitter"]}`}
          ></div>
          <div
            className={`${styles["footer-social-link"]} ${styles["footer-social-link-vk"]}`}
          ></div>
        </div>
      </section>
    </footer>
  );
});

Footer.displayName = "Footer";
