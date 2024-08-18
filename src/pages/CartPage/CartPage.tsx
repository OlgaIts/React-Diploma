import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { removeProduct } from '@app/redux/slices/cartSlice';
import { COLUMNS as columns } from './consts';
import { TableCartItem } from './types';
import { Title } from '@components/Title';
import { Button } from '@components/Button';
import { Table } from '@components/Table';
import { CartEmpty, CheckoutForm, SuccessOrder } from './components';
import styles from './CartPage.module.scss';

interface TableData {
  productsList: TableCartItem[];
  total: number;
}

export const CartPage = memo(() => {
  const products = useAppSelector(({ cart }) => cart.items);
  const status = useAppSelector(({ cart }) => cart.orderStatus);
  const dispatch = useAppDispatch();

  const deleteProduct = (item: TableCartItem) => {
    dispatch(removeProduct(item));
  };

  const tableData: TableData = products.reduce(
    (acc: TableData, { product, count, size }, index) => {
      const item = {
        id: product.id,
        number: index + 1,
        price: `${product.price} руб.`,
        count,
        size,
        title: product.title,
        total: `${product.price * count} руб.`,
      };

      const actions = () => (
        <Button
          tag='button'
          className={styles.btn_delete}
          onClick={() => deleteProduct(item)}
        >
          Удалить
        </Button>
      );
      acc.productsList.push({ ...item, actions });
      acc.total = acc.total + product.price * count;
      return acc;
    },
    { productsList: [], total: 0 },
  );

  if (products.length === 0) {
    return status === 'success' ? <SuccessOrder /> : <CartEmpty />;
  }

  return (
    <main>
      <Title tag='h2' isCentered>
        Корзина
      </Title>
      <section>
        <Table
          columns={columns}
          data={tableData.productsList}
          footer={{
            title: 'Игого',
            titleSpan: 5,
            value: `${tableData.total} руб.`,
          }}
        />
      </section>
      <Title tag='h2' isCentered>
        Оформить заказ
      </Title>
      <section className={styles.order}>
        <CheckoutForm />
      </section>
    </main>
  );
});
CartPage.displayName = 'CartPage';
