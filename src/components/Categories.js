import { connect } from 'react-redux';

function Categories(props) {
  return (
    <>
      <p>CATEGORIES</p>
      {props.categories.categories.map((category, idx) => (
        <div
          onClick={() => {
            props.setCategory(category.categoryId);
          }}
          id={category.displayName}
          name={category.displayName}
          value={category.displayName}
          key={idx}
        >
          {category.displayName}
        </div>
      ))}
      Active: {props.categories.active}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
