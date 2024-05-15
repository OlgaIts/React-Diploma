import {memo} from "react";
// import styles from "./StartPage.module.scss";
import {Preloader} from "../Preloader";
import {Header} from "../Header";

export const StartPage = memo(() => {
  return (
    <>
      <Header />
      <main className='container'>
        <div className='row'>
          <div className='col'>
            <div className='banner'>
              <img
                src='./img/banner.jpg'
                className='img-fluid'
                alt='К весне готовы!'
              />
              <h2 className='banner-header'>К весне готовы!</h2>
            </div>
            <section className='top-sales'>
              <h2 className='text-center'>Хиты продаж!</h2>
              <Preloader />
            </section>
            <section className='catalog'>
              <h2 className='text-center'>Каталог</h2>
              <Preloader />
            </section>
          </div>
        </div>
      </main>
    </>
  );
});

StartPage.displayName = "StartPage";
