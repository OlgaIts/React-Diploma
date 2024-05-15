import {memo} from "react";
import styles from "./NotFound.module.scss";
import {Title} from "../Title";

export const NotFound = memo(() => {
  return (
    <section className='top-sales'>
      <Title tag='h2' isCentered>
        Страница не найдена
      </Title>
      <p>Извините, такая страница не найдена!</p>
    </section>
  );
});
NotFound.displayName = "NotFound";
