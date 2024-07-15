/* eslint-disable react/no-unescaped-entities */
import {memo, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {url} from "../../api";
import {Title} from "../../components/Title";
import {CategoriesList} from "./components/";
import {ItemsList} from "../../components/ItemsList/ItemsList";
import {Button} from "../../components/Button";
import styles from "./CatalogPage.module.scss";

const morecount = 6;

export const CatalogPage = memo(() => {
  const [categoriesList, setCategoriesList] = useState([]); //вынести в кастомный хук useCategories
  const [showMoreButton, setShowMoreButton] = useState(true); //кастомный хук usePaginatProducts // или может и в useGetProducts или оставить здесь
  const [list, setList] = useState([]); // кастомный хук по получению товаров useGetProducts
  const [searchParams] = useSearchParams(); // кастомный хук по получению продуктов/товаров useGetProducts

  const getCategories = async () => {
    // вынести в сервисы
    const response = await fetch(`${url}/api/categories`);
    const result = await response.json();
    setCategoriesList(result);
  };

  const getItems = async (
    // вынести в сервисы
    offset?: number,
    categoryId?: string | null,
    clear?: boolean,
  ) => {
    // const params = '?offset=6&categoryId=13' | '?offset=6' | '?categoryId=13' | ''
    const queryParams = [
      offset && `offset=${offset}`, // false
      categoryId && `categoryId=${categoryId}`, //false
    ].filter(Boolean); // ['offset=6', false].filter(Boolean) => ['offset=6']

    const params = queryParams.length > 0 ? `/?${queryParams.join("&")}` : "";
    const response = await fetch(`${url}/api/items${params}`);
    const result = await response.json();

    if (result.length < 6) {
      // уйдёт в хук useGetProducts
      setShowMoreButton(false);
    }
    if (clear) {
      setList(() => [...result]);
    } else {
      setList((prev) => {
        return [...prev, ...result];
      });
    }
  };

  // оба useEffecta уйдут в useGetProducts
  useEffect(() => {
    getCategories();
    const categoryId = searchParams?.get("categoryId");
    getItems(undefined, categoryId === "11" ? undefined : categoryId);
  }, []);

  useEffect(() => {
    if (searchParams) {
      const categoryId = searchParams.get("categoryId");
      console.log(categoryId);
      getItems(undefined, categoryId === "11" ? undefined : categoryId, true);
    }
  }, [searchParams]);

  const handleLoadMore = async () => {
    getItems(list.length + morecount);
  };

  return (
    <section className='catalog'>
      <Title tag='h2' isCentered>
        Каталог
      </Title>
      <form className={styles["catalog-search-form"]}>
        <input className={styles["form-control"]} placeholder='Поиск' />
      </form>
      <CategoriesList list={categoriesList} />
      <ItemsList list={list} />

      {showMoreButton && (
        <div className={styles.btn_wrap}>
          <Button onClick={handleLoadMore}>Загрузить ещё</Button>
        </div>
      )}
    </section>
  );
});
CatalogPage.displayName = "CatalogPage";
