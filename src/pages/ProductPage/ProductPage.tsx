import {memo} from "react";
import {Title} from "../../components/Title";
import styles from "./ProductPage.module.scss";

interface Props {
  className?: string;
}
export const ProductPage = memo(({className}: Props) => {
  return (
    <main>
      <Title isCentered>какой-то заголовок</Title>
      <div className={styles.wrap}>
        <img src='' alt='' />
        <div className={styles.desc}>
          <p>Артикул</p>
          <p>{}</p>
          <p>Производитель</p>
          <p>{}</p>
          <p>Цвет</p>
          <p>{}</p>
          <p>Материал</p>
          <p>{}</p>
          <p>Сезон</p>
          <p>{}</p>
          <p>Повод</p>
          <p>{}</p>
        </div>
      </div>
    </main>
  );
});
ProductPage.displayName = "ProductPage";
