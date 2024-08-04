import { Product } from '../../types/product';
import { Button } from '../Button';
import styles from './ItemsList.module.scss';

interface ItemsListProps {
  list: Product[];
}

export const ItemsList = ({ list }: ItemsListProps) => {
  return (
    <>
      {!list.length ? (
        <div className={styles.not_found}>Ничего не найдено</div>
      ) : (
        <ul className={styles.list}>
          {list.map((item) => (
            <li key={item.id} className={styles.card}>
              <img
                src={item.images[0]}
                className={styles.img}
                alt={item.title}
              />
              <div className={styles.content}>
                <p className={styles.text}>{item.title}</p>
                <p className={styles.text}>{`${item.price} руб.`}</p>
                <Button
                  withBorder
                  tag='Link'
                  to={`/product/${item.id}`}
                  className={styles.btn}
                >
                  Заказать
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
