import {Button} from "../Button";
import styles from "./ItemsList.module.scss";

// interface ItemsListProps {
//   className?: string;
//   //   list: ;
// }
export const ItemsList = ({list}) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item.id} className={styles.card}>
          <img src={item.images[0]} className={styles.img} alt={item.title} />
          <div className={styles.content}>
            <p className={styles.text}>{item.title}</p>
            <p className={styles.text}>{`${item.price} руб.`}</p>
            <Button href='#' className={styles.btn}>
              Заказать
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
