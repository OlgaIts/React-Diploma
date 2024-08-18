import { Routes, Route } from 'react-router-dom';
import { routeConfig } from './router/routerConfig';
import { Header } from '@components/Header';
import { Banner } from '@components/Banner/Banner';
import { Footer } from '@components/Footer/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route element={element} path={path} key={path} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
