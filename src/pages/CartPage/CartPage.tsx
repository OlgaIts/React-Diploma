import {ReactNode, memo} from "react";
import {Title} from "../../components/Title";
import styles from "./CartPage.module.scss";
import {Button} from "../../components/Button";
import {Table} from "../../components/Table/Table";
import {COLUMNS as columns} from "./consts";
import {CartItem} from "./types";

const data: CartItem[] = [
  {
    number: "1",
    title: "Босоножки",
    size: "18 US",
    quantity: 1,
    price: "34 000 руб.",
    total: "34 000 руб",
  },
];

export const CartPage = memo(() => {
  const onClick = (item: CartItem) => {
    // delete item
    console.log(item);
  };
  
  const tableData = data.map((item) => ({ 
    ...item,
    actions: () => (
      <Button className={styles.btn_delete} onClick={() => onClick(item)}>
        Удалить
      </Button>
    ),
  }));
  
  return (
    <main>
      <Title tag='h2' isCentered>
        Корзина
      </Title>

      <section>
        <Table
          columns={columns}
          data={tableData}
          footer={{title: "Игого", titleSpan: 5, value: "34 руб"}} // дописать вынести футер в переменную
        />
        {/* <div className={styles.row}>#</div>
        <div className={styles.row}>Название</div>
        <div className={styles.row}>Размер</div>
        <div className={styles.row}>Кол-во</div>
        <div className={styles.row}>Стоимость</div>
        <div className={styles.row}>Итого</div>
        <div className={styles.row}>Действия</div>
        <div className={styles.item}>1</div>
        <div className={styles.item}>Босоножки какие-то там</div>
        <div className={styles.item}>18 US</div>
        <div className={styles.item}>1</div>
        <div className={styles.item}>34 000 руб.</div>
        <div className={styles.item}>34 000 руб.</div>
        <div className={styles.item}>
          <button className={` ${styles.btn_delete}`}>Удалить</button>
        </div>
        <div className={`${styles.item} ${styles.item_2}`}>Общая стоимость</div>
        <div className={styles.item}>34 000 руб.</div> */}
      </section>

      <Title tag='h2' isCentered>
        Оформить заказ
      </Title>
      <section className={styles.order}>
        <form className={styles.form}>
          <div className={styles.form_group}>
            <label htmlFor='phone'>Телефон</label>
            <input
              className={styles.input}
              id='phone'
              placeholder='Ваш телефон'
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor='address'>Адрес доставки</label>
            <input
              className={styles.input}
              id='address'
              placeholder='Адрес доставки'
            />
          </div>
          <div>
            <input
              type='checkbox'
              className={styles.check_input}
              id='agreement'
            />
            <label className={styles.check} htmlFor='agreement'>
              Согласен с правилами доставки
            </label>
          </div>
          <Button className={styles.btn}>Оформить</Button>
        </form>
      </section>
    </main>
  );
});
CartPage.displayName = "CartPage";
