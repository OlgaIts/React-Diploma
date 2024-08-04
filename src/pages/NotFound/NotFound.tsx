import { Title } from '../../components/Title';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <section className={styles.section}>
      <Title tag='h2' isCentered>
        Страница не найдена
      </Title>
      <p>Извините, такая страница не найдена!</p>
    </section>
  );
};
