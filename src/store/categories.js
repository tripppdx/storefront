let initialState = {
  categories: [
    {
      categoryId: '1',
      displayName: 'Electronics',
      description: 'Electronic merchandise',
      normalizedName: 'electronics',
    },
    {
      categoryId: '3',
      displayName: 'Food',
      description: 'Food stuffs',
      normalizedName: 'food',
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
