import { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { CartItem } from '../../../../app/redux/slices/cartSlice';
import { Product } from '../../../../types/product';
import { Title } from '../../../../components/Title';
import { QuantityCounter } from '../../../../components/QuantityCounter';
import { Button } from '../../../../components/Button';
import styles from './ProductCard.module.scss';

interface Props {
  product: Product;
}
export const ProductCard = memo(({ product }: Props) => {
  const [item, setItem] = useState<CartItem>({ product, quantity: 1 });
  const [sizeSelected, setSizeSelected] = useState(false);

  const handleChooseSize = (size: string) => {
    setItem((prev) => ({ ...prev, size }));
    setSizeSelected(true);
  };

  const addToCart = () => {
    localStorage.setItem('cart', JSON.stringify(item));
  };

  useEffect(() => {
    console.log(item);
  }, [item]);

  const quantityChange = (quantity: number) => {
    setItem((prev) => ({ ...prev, quantity }));
  };

  return (
    <>
      <Title isCentered>{product.title}</Title>
      <div className={styles.wrapper}>
        <img className={styles.img} src={product.images[0]} />
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
              <span className={styles.text}>Размеры в наличии:</span>
              {product.sizes
                .filter(({ available }) => {
                  return available;
                })
                .map((size) => (
                  <span
                    className={classNames(
                      styles.size,
                      item.size === size.size ? styles.active : '',
                    )}
                    onClick={() => handleChooseSize(size.size)}
                    key={uuidv4()}
                  >
                    {size.size}
                  </span>
                ))}
            </p>
          </div>
          <div className={styles.quantity}>
            <p>Количество:</p>
            <QuantityCounter onChange={quantityChange} />
          </div>
          <Button
            to='/cart'
            tag='Link'
            toCart
            onClick={addToCart}
            disabled={!sizeSelected}
          >
            В корзину
          </Button>
        </div>
      </div>
    </>
  );
});

ProductCard.displayName = 'ProductCard';
