import axios from 'axios';
let initialState = {
  categories: [],
  active: '',
};

function categoryReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'SET_ACTIVE_CATEGORY':
      let categories = [...state.categories];
      let active = payload;
      return { categories, active };

    case 'RESET_ACTIVE':
      return initialState;

    case 'FETCH_CATEGORIES':
      return { categories: payload };

    default:
      return state;
  }
}

export const fetchCategories = () => async dispatch => {
  const response = await axios.get(
    'https://api-integration-server.herokuapp.com/categories'
  );
  console.log(response.data.results);
  dispatch({
    type: 'FETCH_CATEGORIES',
    payload: response.data.results,
  });
};

export default categoryReducer;
