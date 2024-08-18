import { Title } from '@components/Title';
import image from '@img/404.jpg';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <section className={styles.section}>
      <Title tag='h2' isCentered>
        Oops! Страница, которую вы ищете, не найдена
      </Title>
      <div className={styles.wrapper}>
        <img src={image} className={styles.img} />
        <div className={styles.not}>404</div>
      </div>
    </section>
  );
};
