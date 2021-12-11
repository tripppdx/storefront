let initialState = {
  cart: [],
  totalItems: 0,
};

function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_ITEM_CART':
      let totalItems = state.totalItems + 1;
      let cart = [...state.cart];
      let newItem = payload;
      if (cart.filter(item => item.name === newItem.name).length > 0) {
        cart.forEach(cartItem => {
          if (cartItem.name === newItem.name) {
            cartItem.itemCount += 1;
          }
        });
      } else {
        cart.push({ name: newItem.name, itemCount: 1 });
      }

      return { cart, totalItems };

    case 'RESET_CART':
      return initialState;

    default:
      return state;
  }
}

export default cartReducer;
