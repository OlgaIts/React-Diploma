import { memo } from 'react';
import { useProducts } from '../../../../hooks/useProducts';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import { CategoriesList } from '../CategoriesList/CategoriesList';
import { ItemsList } from '../../../../components/ItemsList';
import { Button } from '../../../../components/Button';
import { SearchInput } from '../../../../components/Search';
import { Preloader } from '../../../../components/Preloader';
import styles from './Catalog.module.scss';

interface CatalogProps {
  showSearch?: boolean;
}

export const Catalog = memo(({ showSearch }: CatalogProps) => {
  const { loadMoreProducts, searchProducts } = useProducts();
  const list = useAppSelector(({ products }) => products.products);
  const showMoreButton = useAppSelector(
    ({ products }) => products.showMoreButton,
  );
  const isLoading = useAppSelector(({ products }) => products.isLoading);

  return (
    <>
      {showSearch && (
        <SearchInput
          callback={searchProducts}
          className={styles.search_input}
          // TODO: подумать!!!
        />
      )}
      <CategoriesList />
      <ItemsList list={list} />
      {isLoading && <Preloader />}
      {showMoreButton && (
        <div className={styles.btn_wrap}>
          <Button tag='button' withBorder onClick={loadMoreProducts}>
            Загрузить ещё
          </Button>
        </div>
      )}
    </>
  );
});
Catalog.displayName = 'Catalog';
