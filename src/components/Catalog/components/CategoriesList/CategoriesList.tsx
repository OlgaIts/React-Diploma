import styles from "./CategoriesList.module.scss";

type Item = {
  id: number;
  title: string;
};

interface CategoriesListProps {
  list: Item[];
}
export const CategoriesList = ({list}: CategoriesListProps) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li className={styles.item} key={item.id}>
          <a href='#'>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};
