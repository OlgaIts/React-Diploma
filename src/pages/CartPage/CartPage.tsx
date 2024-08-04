import { memo } from 'react';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { COLUMNS as columns } from './consts';
import { TableCartItem } from './types';
import styles from './CartPage.module.scss';

const data: TableCartItem[] = [
  {
    number: '1',
    title: 'Босоножки',
    size: '18 US',
    quantity: 1,
    price: '34 000 руб.',
    total: '34 000 руб',
  },
];

export const CartPage = memo(() => {
  const onClick = (item: TableCartItem) => {
    // delete item
    console.log(item);
  };

  const tableData = data.map((item) => ({
    ...item,
    actions: () => (
      <Button
        tag='button'
        className={styles.btn_delete}
        onClick={() => onClick(item)}
      >
        Удалить
      </Button>
    ),
  }));

  return (
    <main>
      <Title tag='h2' isCentered>
        Корзина
      </Title>

      <section>
        <Table
          columns={columns}
          data={tableData}
          footer={{ title: 'Игого', titleSpan: 5, value: '34 руб' }} // дописать вынести футер в переменную
        />
      </section>

      <Title tag='h2' isCentered>
        Оформить заказ
      </Title>
      <section className={styles.order}>
        <form className={styles.form}>
          <div className={styles.form_group}>
            <label htmlFor='phone'>Телефон</label>
            <input
              className={styles.input}
              id='phone'
              placeholder='Ваш телефон'
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor='address'>Адрес доставки</label>
            <input
              className={styles.input}
              id='address'
              placeholder='Адрес доставки'
            />
          </div>
          <div>
            <input
              type='checkbox'
              className={styles.check_input}
              id='agreement'
            />
            <label className={styles.check} htmlFor='agreement'>
              Согласен с правилами доставки
            </label>
          </div>
          <Button
            tag='button'
            withBorder
            onClick={() => console.log('Оформить')}
            className={styles.btn}
          >
            Оформить
          </Button>
        </form>
      </section>
    </main>
  );
});
CartPage.displayName = 'CartPage';
