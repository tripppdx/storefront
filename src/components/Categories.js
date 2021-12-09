import { connect } from 'react-redux';

function Categories(props) {
  const handleClick = e => {
    props.setCategory(e.target.id);
  };
  return (
    <>
      <p>CATEGORIES</p>
      {props.categories.categories.map((category, idx) => (
        <div
          onClick={handleClick}
          id={category.name}
          name={category.name}
          value={category.name}
          key={idx}
        >
          {category.name}
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
