import { connect } from 'react-redux';

function SimpleCart(props) {
  // let data = props.cart.cart.map(item => {
  //   return { name: item.name, count: 1 };
  // });

  // console.log(data);
  console.log('props', props);
  return (
    <>
      <p>CART</p>
      {props.cart.cart.map((item, idx) => (
        <div key={idx}>
          {item.name} count: {item.itemCount}
        </div>
      ))}
      Total: {props.cart.totalItems}
    </>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch({ type: 'ADD_ITEM_CART', payload: item }),
  reset: () => dispatch({ type: 'RESET_CART' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
