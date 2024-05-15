import {Header} from "../components/Header";
import {Banner} from "../components/Banner/Banner";
import {Footer} from "../components/Footer/Footer";
import {CartPage} from "../pages/CartPage/CartPage";
// import {Contacts} from "../components/Contacts/Contacts";
// import {Catalog} from "../components/Catalog/Catalog";
// import {About} from "../components/About/About";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      {/* <Contacts /> */}
      {/* <Catalog /> */}
      {/* <About /> */}
      <CartPage />
      <Footer />
    </div>
  );
}

export default App;
