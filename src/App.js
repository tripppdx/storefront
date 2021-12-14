import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/">
              <Header />
              <Categories />
              <Products />
              <SimpleCart />
              <Footer />
            </Route>
            <Route exact path="/cart">
              <Header />
              <ShoppingCart />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
