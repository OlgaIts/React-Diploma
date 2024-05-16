import {memo} from "react";
// import styles from "./StartPage.module.scss";
import {Preloader} from "../../components/Preloader";
import {TopSales} from "../../components/TopSales";

export const StartPage = memo(() => {
  return (
    <>
      <main className='container'>
        <TopSales />
        <section className='catalog'>
          <h2 className='text-center'>Каталог</h2>
          <Preloader />
        </section>
      </main>
    </>
  );
});

StartPage.displayName = "StartPage";
