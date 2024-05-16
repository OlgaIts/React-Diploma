import {Header} from "../components/Header";
import {Banner} from "../components/Banner/Banner";
import {Footer} from "../components/Footer/Footer";
// import {CartPage} from "../pages/CartPage/CartPage";
// import {ContactsPage} from "../pages/ContactsPage/ContactsPage";
// import {Catalog} from "../components/Catalog/Catalog";
// import {About} from "../pages/AboutPage/AboutPage";
// import {StartPage} from "../pages/StartPage/StartPage";
import {NotFound} from "../pages/NotFound/NotFound";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      {/* <StartPage /> */}
      {/* <ContactsPage /> */}
      {/* <Catalog /> */}
      {/* <About /> */}
      {/* <CartPage /> */}
      <NotFound />
      <Footer />
    </div>
  );
}

export default App;
