import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
            fontWeight: 'normal',
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
            fontWeight: 'normal',
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
