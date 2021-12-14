import { connect } from 'react-redux';

function Header(props) {
  return (
    <>
      <div className="storeHeader">
        <a
          href="/"
          style={{
            marginLeft: '2rem',
            textDecoration: 'none',
            fontSize: '3rem',
          }}
        >
          STOREFRONT
        </a>
        <a
          href="/cart"
          style={{
            marginRight: '2rem',
            textDecoration: 'none',
            fontSize: '1.1rem',
          }}
        >
          Cart: {props.cart.totalItems}
        </a>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
