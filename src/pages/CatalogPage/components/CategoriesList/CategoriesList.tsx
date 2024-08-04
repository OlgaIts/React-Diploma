import {useSearchParams} from "react-router-dom";
import styles from "./CategoriesList.module.scss";
import {useAppSelector} from "../../../../hooks/reduxHooks";
import classNames from "classnames";
import {useGetCategories} from "../../../../hooks/useGetCategories";

type Item = {
  id: number;
  title: string;
};

export const CategoriesList = () => {
  const {categoriesList: list} = useGetCategories();
  const categoryList = [{id: 11, title: "Все"}, ...list];
  const currentCategory = useAppSelector(({products}) => products.categoryId);
  const [searchParams, setSearchParams] = useSearchParams();

  const onCategoryClick = (item: Item) => {
    item.id === 11
      ? searchParams.delete("categoryId")
      : searchParams.set("categoryId", item.id.toString());
    searchParams.delete("offset");
    setSearchParams(searchParams);
  };

  return (
    <ul className={styles.list}>
      {categoryList.map((item) => (
        <li className={styles.item} key={item.id}>
          <div
            onClick={() => onCategoryClick(item)}
            className={classNames({
              [styles.active]:
                (item.id === 11 && !currentCategory) ||
                item.id === Number(currentCategory),
            })}
          >
            {item.title}
          </div>
        </li>
      ))}
    </ul>
  );
};
