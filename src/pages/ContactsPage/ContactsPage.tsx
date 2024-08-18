import { memo } from 'react';
import { Title } from '@components/Title';
import styles from './ContactsPage.module.scss';

export const ContactsPage = memo(() => {
  return (
    <section className={styles.section}>
      <Title tag='h2' isCentered>
        Контакты
      </Title>
      <p>
        Наш головной офис расположен в г.Москва, по адресу: Варшавское шоссе, д.
        17, бизнес-центр W Plaza.
      </p>
      <Title tag='h5' isCentered className={styles.title}>
        Координаты для связи:
      </Title>
      <p className={styles.text}>
        Телефон: <a href='tel:+74957903503'>+7 495 79 03 5 03</a> (ежедневно: с
        09-00 до 21-00)
      </p>
      <p>
        Email: <a href='mailto:office@bosanoga.ru'>office@bosanoga.ru</a>
      </p>
    </section>
  );
});

ContactsPage.displayName = 'ContactsPage';
