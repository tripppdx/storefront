import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { fetchProducts } from '../store/products';
import { useEffect } from 'react';

function Products({ products, getProducts, addToCart, decrement, categories }) {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  console.log('PRODUCTS', products);
  console.log('ACTIVE', categories.active);

  return (
    <>
      <p>PRODUCTS</p>
      <Grid
        sx={{ margin: '50px 0px 0px 0px' }}
        justifyContent="center"
        container
        spacing={1}
      >
        {products.products.map((product, idx) => {
          return (
            <Grid key={idx} item>
              {' '}
              {categories.active === parseInt(product.categoryId) ? (
                <Card>
                  <Button
                    onClick={() => {
                      decrement(product.name);
                      addToCart(product);
                    }}
                  >
                    Buy {product.name}!
                  </Button>
                  <Typography>{product.inventoryCount}</Typography>
                </Card>
              ) : null}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

// layer the state to props
const mapStateToProps = state => {
  return {
    products: state.products,
    categories: state.categories,
    cart: state.cart,
  };
};
// this allows actions to be pumped through our reducer.
const mapDispatchToProps = dispatch => ({
  decrement: product =>
    dispatch({ type: 'UPDATE_INVENTORY', payload: product }),
  reset: () => dispatch({ type: 'RESET_INVENTORY' }),
  addToCart: item => dispatch({ type: 'ADD_ITEM_CART', payload: item }),
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
