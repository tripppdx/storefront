import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import SimpleCart from './components/SimpleCart';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <>
      <Provider store={store()}>
        <Router>
          <Header />
          <Routes>
            <Route path="/cart" element={<ShoppingCart />} />
            <Route
              path="/"
              element={
                <>
                  <Categories />
                  <Products />
                  <SimpleCart />
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
