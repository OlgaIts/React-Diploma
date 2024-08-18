import { memo } from 'react';
import classNames from 'classnames';
import { Title } from '@components/Title';
import { FooterNav } from './components';
import styles from './Footer.module.scss';

export const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <section className={styles.col}>
        <Title tag='h5' className={styles.title}>
          Информация
        </Title>
        <FooterNav />
      </section>
      <div className={styles.col}>
        <section>
          <Title tag='h5' className={styles.title}>
            Принимаем к оплате:
          </Title>
          <div className={styles.pay_sistems}>
            <div className={classNames(styles.pay, styles.paypal)}></div>
            <div className={classNames(styles.pay, styles.master_card)}></div>
            <div className={classNames(styles.pay, styles.visa)}></div>
            <div className={classNames(styles.pay, styles.yandex)}></div>
            <div className={classNames(styles.pay, styles.webmoney)}></div>
            <div className={classNames(styles.pay, styles.qiwi)}></div>
          </div>
        </section>
        <section>
          <div className={styles.copyright}>
            2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
            аксессуаров. Все права защищены.
            <br />
            Доставка по всей России!
          </div>
        </section>
      </div>

      <section className={classNames(styles.col, styles.text_right)}>
        <Title tag='h5' className={styles.title}>
          Контакты:
        </Title>
        <a className={styles.phone} href='tel:+74957903503'>
          +7 495 79 03 5 03
        </a>
        <span>Ежедневно: с 09-00 до 21-00</span>
        <a className={styles.email} href='mailto:office@bosanoga.ru'>
          office@bosanoga.ru
        </a>
        <div className={styles.social}>
          <div className={classNames(styles.social_link, styles.twitter)}></div>
          <div className={classNames(styles.social_link, styles.vk)}></div>
        </div>
      </section>
    </footer>
  );
});
Footer.displayName = 'Footer';
