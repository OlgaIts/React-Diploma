import {memo} from "react";
import {TopSales} from "./components";
import {Title} from "../../components/Title";
import {Button} from "../../components/Button";
import styles from "./StartPage.module.scss";

export const StartPage = memo(() => {
  return (
    <>
      <main className='container'>
        <TopSales />
        <section className='catalog'>
          <Title tag='h2' isCentered>
            Каталог
          </Title>
          
          <Button className={styles.btn}>Загрузить ещё</Button>
        </section>
      </main>
    </>
  );
});

StartPage.displayName = "StartPage";
