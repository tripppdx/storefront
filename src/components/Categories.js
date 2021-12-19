import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../store/categories';
import Button from '@mui/material/Button';

function Categories({ categories, setCategory, getCategories }) {
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <>
      <p
        style={{
          fontWeight: 'normal',
          fontSize: '2rem',
          marginLeft: '2rem',
        }}
      >
        Categories
      </p>
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
        }}
      >
        {}
        {categories.categories
          ? categories.categories.map((category, idx) => (
              <div>
                <Button
                  variant="contained"
                  style={{
                    width: '10rem',
                    marginLeft: '2rem',
                  }}
                  onClick={() => {
                    setCategory(category.id);
                  }}
                  key={idx}
                >
                  {category.displayName}
                </Button>
              </div>
            ))
          : null}
      </div>
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
