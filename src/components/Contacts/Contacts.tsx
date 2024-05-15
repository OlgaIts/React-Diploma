import {memo} from "react";
import { Title } from "../Title";
import styles from "./Contacts.module.scss";

export const Contacts = memo(() => {
  return (
    <section className={styles['top-sales']}>
      <Title tag="h2" className='text-center'>Контакты</Title>
      <p>
        Наш головной офис расположен в г.Москва, по адресу: Варшавское шоссе, д.
        17, бизнес-центр W Plaza.
      </p>
      <Title tag="h5" className='text-center'>Координаты для связи:</Title>
      <p>
        Телефон: <a href='tel:+74957903503'>+7 495 79 03 5 03</a>{" "}
        (ежедневно: с 09-00 до 21-00)
      </p>
      <p>
        Email: <a href='mailto:office@bosanoga.ru'>office@bosanoga.ru</a>
      </p>
    </section>
  );
});

Contacts.displayName = "Contacts";
