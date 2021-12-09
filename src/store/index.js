import { createStore, combineReducers } from 'redux';

import categoryReducer from './categories';

let reducers = combineReducers({ categories: categoryReducer });

const store = () => {
  return createStore(reducers);
};

export default store;
