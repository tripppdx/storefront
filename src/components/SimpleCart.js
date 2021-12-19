import { connect } from 'react-redux';
import { Paper } from '@mui/material';

function SimpleCart(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {props.cart.cart.map((item, idx) => (
        <Paper
          square
          elevation={3}
          key={idx}
          style={{ width: '8%', textAlign: 'center', margin: '.5rem' }}
        >
          {item.name} ({item.itemCount})
        </Paper>
      ))}
    </div>
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
