import { connect } from 'react-redux';

function Header(props) {
  return (
    <>
      <div className="storeHeader">
        <p>STOREFRONT</p>
        <p>Cart: {props.cart.totalItems}</p>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
