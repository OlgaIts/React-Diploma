import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProduct } from '@hooks/useGetProduct';
import { Preloader } from '@components/Preloader';
import { ProductCard } from './components/ProductCard/ProductCard';
import styles from './ProductPage.module.scss';

export const ProductPage = memo(() => {
  const { productId } = useParams();
  const { product, isLoading } = useGetProduct(Number(productId));

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <Preloader />
      </div>
    );
  }

  if (!product) {
    return <div className={styles.wrapper}>Такого товара не существует</div>;
  }

  return (
    <main>
      <ProductCard product={product} />
    </main>
  );
});
ProductPage.displayName = 'ProductPage';
