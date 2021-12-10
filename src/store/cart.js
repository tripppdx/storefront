let initialState = {
  cart: [{ name: '', itemCount: 0 }],
  totalItems: 0,
};

function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_ITEM_CART':
      let totalItems = state.totalItems + 1;
      let cart = state.cart;
      let newItem = payload;
      cart.push(newItem);

      // let items = cart.map(item => {
      //   console.log('-------->', item.name, payload.name);
      //   if (item.name === payload.name) {
      //     let foo = { name: item.name, count: item.count + 1 };
      //     console.log('foo', foo);
      //   } else {
      //     let bar = { name: payload.name, count: 1 };
      //     console.log('bar', bar);
      //   }
      // });
      return { cart, totalItems };

    case 'RESET_CART':
      return initialState;

    default:
      return state;
  }
}

export default cartReducer;
