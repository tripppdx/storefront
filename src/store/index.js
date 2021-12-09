import { createStore, combineReducers } from 'redux';

import categoryReducer from './categories';
import productReducer from './products';

let reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer,
});

const store = () => {
  return createStore(reducers);
};

export default store;
