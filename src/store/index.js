import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from './middleware/thunk.js';

import categoryReducer from './categories';
import productReducer from './products';
import cartReducer from './cart';

let reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

// const store = () => {
//   return createStore(reducers);
// };

let store = () => {
  // the second param of creatStore is for middleware
  return createStore(reducers, applyMiddleware(thunk));
};

export default store;
