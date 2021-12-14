let initialState = {
  cart: [],
  totalItems: 0,
  totalBill: 0,
};

function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_ITEM_CART':
      let cart = [...state.cart];
      let totalItems = state.totalItems;

      if (payload.inventoryCount !== 0) {
        totalItems += 1;
        let newItem = payload;
        if (cart.filter(item => item.name === newItem.name).length > 0) {
          cart.forEach(cartItem => {
            if (cartItem.name === newItem.name) {
              cartItem.itemCount += 1;
            }
          });
        } else {
          cart.push({ name: newItem.name, price: newItem.price, itemCount: 1 });
        }
      }
      let totalBill = 0;
      let i = 0;
      while (cart[i]) {
        let sum = cart[i].price * cart[i].itemCount;
        totalBill = totalBill + sum;
        i++;
      }
      return { cart, totalItems, totalBill };

    case 'RESET_CART':
      return initialState;

    default:
      return state;
  }
}

export default cartReducer;
