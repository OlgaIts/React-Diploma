import {memo} from "react";
import {useGetCategories} from "../../hooks/useGetCategories";
import {TopSales} from "./components";
import {Title} from "../../components/Title";
import {Catalog} from "../CatalogPage/components";

export const StartPage = memo(() => {
  const {categoriesList} = useGetCategories();

  return (
    <>
      <main>
        <TopSales />
        <section>
          <Title tag='h2' isCentered>
            Каталог
          </Title>
          {/* <Catalog categoriesList={categoriesList} handleLoadMore={} list={} showMoreButton={}/>   ДОПИСАТЬ */}
        </section>
      </main>
    </>
  );
});

StartPage.displayName = "StartPage";
