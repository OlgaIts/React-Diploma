import { memo } from 'react';
import { TopSales } from './components';
import { Title } from '../../components/Title';
import { Catalog } from '../CatalogPage/components';

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
