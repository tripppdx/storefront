let initialState = {
  products: [
    {
      name: 'iPhone',
      category: 'Electronics',
      description: 'expensive communication device',
      price: 999,
      inventory: 10,
    },
    {
      name: 'PS5',
      category: 'Electronics',
      description: 'gaming console',
      price: 500,
      inventory: 10,
    },
    {
      name: 'bananas',
      category: 'Food',
      description: 'monkeys love them',
      price: 5,
      inventory: 10,
    },
    {
      name: 'salmon',
      category: 'Food',
      description: 'full of omega-3',
      price: 10,
      inventory: 10,
    },
  ],
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'UPDATE_INVENTORY':
      let products = state.products.map(product => {
        if (product.name === payload) {
          console.log('STATE', product.name);
          return { ...product, inventory: product.inventory - 1 };
        } else {
          return product;
        }
      });

      return { products };

    case 'RESET_INVENTORY':
      return initialState;

    default:
      return state;
  }
}

export default productReducer;
