import { memo } from 'react';
import { Title } from '@components/Title';
import { Catalog } from '@pages/CatalogPage/components';
import { TopSales } from './components';

export const StartPage = memo(() => {
  return (
    <>
      <main>
        <TopSales />
        <section>
          <Title tag='h2' isCentered>
            Каталог
          </Title>
          <Catalog />
        </section>
      </main>
    </>
  );
});

StartPage.displayName = 'StartPage';
