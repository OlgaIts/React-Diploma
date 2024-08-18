import { memo } from 'react';
import { useGetTopSales } from '@hooks/useGetTopSales';
import { ItemsList } from '@components/ItemsList';
import { Preloader } from '@components/Preloader';
import { Title } from '@components/Title';

export const TopSales = memo(() => {
  const { list, isLoading } = useGetTopSales();

  if (!list) {
    return [];
  }

  return (
    <div>
      <Title tag='h2' isCentered>
        Хиты продаж
      </Title>
      {isLoading ? <Preloader /> : <ItemsList list={list} />}
    </div>
  );
});

TopSales.displayName = 'TopSales';
