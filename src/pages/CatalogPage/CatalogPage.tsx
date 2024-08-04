import {memo} from "react";
import {Title} from "../../components/Title";
import {Catalog} from "./components/";
import styles from "./CatalogPage.module.scss";

export const CatalogPage = memo(() => {
  return (
    <section className={styles.catalog}>
      <Title tag='h2' isCentered>
        Каталог
      </Title>
      <Catalog showSearch />
    </section>
  );
});

CatalogPage.displayName = "CatalogPage";
