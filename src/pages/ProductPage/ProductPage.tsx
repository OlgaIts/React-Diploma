import {memo, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {url} from "../../api";
import {Title} from "../../components/Title";
import {QuantityCounter} from "../../components/QuantityCounter";
import {Button} from "../../components/Button";
import styles from "./ProductPage.module.scss";

interface Props {
  className?: string;
}

export const ProductPage = memo(({className}: Props) => {
  const {productId} = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const response = await fetch(`${url}/api/items/${productId}`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    if (productId) {
      getProduct();
    }
  }, []);

  if (!product) {
    return <div>Такого товара не существует</div>;
  }

  const handleChooseSize = () => {
    console.log("работает");
  };

  return (
    <main>
      <Title isCentered>{product.title}</Title>
      <div className={styles.wrapper}>
        <img className={styles.img} src={product.images[0]} alt='' />
        <div className={styles.desc}>
          <div className={styles.form}>
            <p>Артикул</p>
            <p>{product.sku}</p>
            <p>Производитель</p>
            <p>{product.manufacturer}</p>
            <p>Цвет</p>
            <p>{product.color}</p>
            <p>Материал</p>
            <p>{product.material}</p>
            <p>Сезон</p>
            <p>{product.season}</p>
            <p>Повод</p>
            <p>{product.reason}</p>
          </div>
          <div className={styles.sizes}>
            <p>
              Размеры в наличии:{" "}
              {product.sizes
                .filter(({available}) => {
                  return available;
                })
                .map((size) => (
                  <span
                    className={styles.size}
                    onClick={handleChooseSize}
                    key={size}
                  >
                    {size.size}
                  </span>
                ))}
            </p>
          </div>
          <div className={styles.quantity}>
            <p>Количество:</p>
            <QuantityCounter />
          </div>
          <Button className={styles.btn}>В корзину</Button>
        </div>
      </div>
    </main>
  );
});
ProductPage.displayName = "ProductPage";
