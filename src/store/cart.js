let initialState = {
  cart: [],
  totalItems: 0,
};

function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_ITEM_CART':
      let totalItems = state.totalItems + 1;
      let newItem = payload;
      let cart = state.cart;
      cart.push(newItem);

      return { cart, totalItems };

    case 'RESET_CART':
      return initialState;

    default:
      return state;
  }
}

export default cartReducer;
