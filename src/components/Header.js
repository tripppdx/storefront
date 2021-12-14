import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Header({ cart }) {
  return (
    <>
      <div className="storeHeader">
        <Link
          to="/"
          style={{
            marginLeft: '2rem',
            textDecoration: 'none',
            fontSize: '3rem',
          }}
        >
          STOREFRONT
        </Link>
        <Link
          to="/cart"
          style={{
            marginRight: '2rem',
            textDecoration: 'none',
            fontSize: '1.1rem',
          }}
        >
          Cart: {cart.totalItems}
        </Link>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
