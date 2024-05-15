import {Title} from "../Title";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <main className='container'>
      <Title tag='h2' isCentered>
        О магазине
      </Title>
      <p>
        В Интернете можно встретить немало магазинов, предлагающих аксессуары.
        Но именно к нам хочется возвращаться снова и снова.
      </p>
      <Title tag='h5' isCentered className={styles.sub_title}>
        Мы предлагаем вам особые условия:
      </Title>
      <ol className={styles.list}>
        <li className={styles.item}>
          Индивидуальный подход специалиста. Когда поступает новая коллекция
          обуви весна-лето или же коллекция обуви осень-зима – покупателям
          бывает трудно сориентироваться во всем многообразии новинок. Наш
          менеджер по телефону поможет вам определиться с товарами, подходящими
          именно вам.
        </li>
        <li className={styles.item}>
          Мы периодически проводим распродажи как женских и мужских, так и
          детских моделей. Вы будете приятно удивлены ценами на аксессуары в
          мага- зине BosaNoga.
        </li>
        <li className={styles.item}>
          У нас всегда есть из чего выбрать. Неважно, какую категорию вы прос-
          матриваете: осень-зима, или же весна-лето – вы всегда сможете найти
          ва- рианты, подходящие вам по внешнему виду и цене.
        </li>
        <li className={styles.item}>Мы несем ответственность за все товары.</li>
        <li className={styles.item}>
          Молодые мамы будут рады обширному ассортименту детских моделей.
        </li>
      </ol>
      <p className={styles.item}>
        Если вы ищете место, где представлены обувные новинки от самых известных
        брендов, то вы зашли по верному адресу.
      </p>
      <p className={styles.item}>
        У нас представлены модели для мужчин, женщин, а также детские сапоги,
        босоножки, ботинки и туфли. Сделав заказ в нашем интернет-магазине, вы
        сможете быть модным и стильным как осенью-зимой, так и весной-летом.
        Просто наберите номер нашего телефона, и мы поможем вам определиться с
        покупкой.
      </p>
    </main>
  );
};
About.displayName = "About";
