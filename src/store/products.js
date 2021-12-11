import axios from 'axios';

let initialState = {
  products: [
    // {
    //   name: 'iPhone',
    //   category: 'Electronics',
    //   description: 'expensive communication device',
    //   price: 999,
    //   inventory: 10,
    //   categoryId: '1',
    // },
    // {
    //   name: 'PS5',
    //   category: 'Electronics',
    //   description: 'gaming console',
    //   price: 500,
    //   inventory: 10,
    //   categoryId: '1',
    // },
    // {
    //   name: 'bananas',
    //   category: 'Food',
    //   description: 'monkeys love them',
    //   price: 5,
    //   inventory: 10,
    //   categoryId: '3',
    // },
    // {
    //   name: 'salmon',
    //   category: 'Food',
    //   description: 'full of omega-3',
    //   price: 10,
    //   inventory: 10,
    //   categoryId: '3',
    // },
  ],
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'UPDATE_INVENTORY':
      let products = state.products.map(product => {
        if (product.name === payload) {
          return { ...product, inventory: product.inventory - 1 };
        } else {
          return product;
        }
      });

      return { products };

    case 'FETCH_PRODUCTS':
      return { products: payload };

    case 'RESET_INVENTORY':
      return initialState;

    default:
      return state;
  }
}

export const fetchProducts = () => async dispatch => {
  const response = await axios.get(
    'https://api-integration-server.herokuapp.com/products'
  );
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: response.data.results,
  });
};

export default productReducer;
