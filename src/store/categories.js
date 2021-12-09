let initialState = {
  categories: [
    {
      name: 'Electronics',
      description: 'Electronic merchandise',
      // active: false,
    },
    {
      name: 'Food',
      description: 'Food stuffs',
      // active: false,
    },
  ],
  active: '',
};

function categoryReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'SET_ACTIVE_CATEGORY':
      let categories = state.categories;
      let active = payload;
      return { categories, active };

    case 'RESET_ACTIVE':
      return initialState;

    default:
      return state;
  }
}

export default categoryReducer;
