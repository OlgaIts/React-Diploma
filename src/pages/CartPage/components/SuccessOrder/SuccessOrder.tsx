import { memo } from 'react';
import { Title } from '@components/Title';
import { Button } from '@components/Button';
import Bag from '@img/bag_check.svg?react';
import styles from './SuccessOrder.module.scss';

export const SuccessOrder = memo(() => {
  return (
    <section className={styles.component}>
      <Bag className={styles.icon} />
      <Title tag='h5' className={styles.title}>
        Заказ успешно оформлен
      </Title>
      <p>
        Мы свяжемся с вами в ближайшее время для подтверждения всех деталей
        заказа.
      </p>
      <p className={styles.text}>Благодарим за заказ и хорошего вам дня!</p>

      <Button tag='Link' to='/' withBorder className={styles.btn}>
        Вернуться на главную
      </Button>
    </section>
  );
});
SuccessOrder.displayName = 'SuccessOrder';
