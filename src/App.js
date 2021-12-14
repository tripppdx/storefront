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
        <Header />
        <Router>
          <Routes>
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
            <Route exact path="/cart" element={<ShoppingCart />} />
          </Routes>
        </Router>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
