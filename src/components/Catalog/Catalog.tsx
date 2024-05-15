/* eslint-disable react/no-unescaped-entities */
import {memo, useEffect, useState} from "react";
import {Title} from "../Title";
import {CategoriesList} from "./components/CategoriesList/CategoriesList";
import styles from "./Catalog.module.scss";
import {ItemsList} from "./components/ItemsList/ItemsList";
import {Button} from "../Button";

const url = "http://localhost:7070";

export const Catalog = memo(() => {
  const [category, setCategory] = useState([]);
  const [list, setList] = useState([]);
  // const [selected, setSelected] = useState(category[0]);

  const getCategories = async () => {
    const response = await fetch(`${url}/categories`);
    const result = await response.json();
    setCategory(result);
  };

  const getItems = async () => {
    const response = await fetch(`${url}/api/items`);
    const result = await response.json();
    setList(result);
  };

  useEffect(() => {
    getCategories();
    getItems();
  }, []);

  return (
    <section className='catalog'>
      <Title tag='h2' isCentered>
        Каталог
      </Title>
      <form className={styles["catalog-search-form"]}>
        <input className={styles["form-control"]} placeholder='Поиск' />
      </form>
      <CategoriesList list={category} />
      <ItemsList list={list} />

      <div className={styles.btn_wrap}>
        <Button>Загрузить ещё</Button>
      </div>
    </section>
  );
});
Catalog.displayName = "Catalog";
