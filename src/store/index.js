import { createStore, combineReducers } from 'redux';

import categoryReducer from './categories';
import productReducer from './products';
import cartReducer from './cart';

let reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers);
};

export default store;
