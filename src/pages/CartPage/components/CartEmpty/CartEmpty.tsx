import { memo } from 'react';
import { Button } from '@components/Button';
import { Title } from '@components/Title';
import Cart from '@img/shipping_basket.svg?react';
import styles from './CartEmpty.module.scss';

export const CartEmpty = memo(() => {
  return (
    <div className={styles.component}>
      <Cart className={styles.icon} />
      <Title tag='h5' className={styles.text}>
        В корзине ничего нет
      </Title>
      <Button tag='Link' to='/catalog' withBorder className={styles.btn}>
        Перейти в каталог
      </Button>
    </div>
  );
});
CartEmpty.displayName = 'CartEmpty';
