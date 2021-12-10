import './App.css';

import { Provider } from 'react-redux';
import store from './store/index.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import SimpleCart from './components/SimpleCart';

function App() {
  return (
    <>
      <Provider store={store()}>
        <Header />
        <Categories />
        <Products />
        <SimpleCart />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
