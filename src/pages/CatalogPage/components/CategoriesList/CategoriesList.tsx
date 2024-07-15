import {NavLink, useSearchParams} from "react-router-dom";
import styles from "./CategoriesList.module.scss";

type Item = {
  id: number;
  title: string;
};

interface CategoriesListProps {
  list: Item[];
}
export const CategoriesList = ({list}: CategoriesListProps) => {
  const categoryList = [{id: 11, title: "Все"}, ...list];
  const [searchParams] = useSearchParams(); // quary параметры, которые идут после вопросительного знака
  const currentCategory = searchParams.get("categoryId"); // Map {categoryId: 13, offset: 60} currentCategory.categoryId // currentCategory.get('categoryId')

  return (
    <ul className={styles.list}>
      {categoryList.map((item) => (
        <li className={styles.item} key={item.id}>
          <NavLink
            to={`/catalog/?categoryId=${item.id}`}
            className={item.id === Number(currentCategory) ? styles.active : ""}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
