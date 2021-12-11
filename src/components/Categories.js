import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../store/categories';

function Categories({ categories, setCategory, getCategories }) {
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  console.log(categories);

  return (
    <>
      <p>CATEGORIES</p>
      {categories.categories.map((category, idx) => (
        <div
          onClick={() => {
            setCategory(category.displayName);
          }}
          id={category.displayName}
          name={category.displayName}
          value={category.displayName}
          key={idx}
        >
          {category.displayName}
        </div>
      ))}
      Active: {categories.active}
    </>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = dispatch => ({
  setCategory: category =>
    dispatch({ type: 'SET_ACTIVE_CATEGORY', payload: category }),
  reset: () => dispatch({ type: 'RESET_ACTIVE' }),
  getCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
