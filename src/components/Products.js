import { connect } from 'react-redux';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { fetchProducts } from '../store/products';
import { useEffect } from 'react';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Products({ products, getProducts, addToCart, decrement, categories }) {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  console.log('PRODUCTS', products);
  console.log('ACTIVE', categories.active);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        position: 'relative',
        zIndex: '100',
      }}
    >
      {products.products.map((product, idx) =>
        categories.active === parseInt(product.categoryId) ? (
          <div
            key={idx}
            style={{ margin: '3rem', position: 'relative', zIndex: '100' }}
          >
            <Card style={{ width: 350, background: 'darkGrey' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src="../img/markus-spiske-iar-afB0QQw-unsplash.jpg"
                  alt="random"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    addToCart(product);
                    decrement(product.name);
                  }}
                >
                  Add to Cart
                </Button>
                <p>Left:{product.inventoryCount}</p>
              </CardActions>
            </Card>
          </div>
        ) : null
      )}
    </div>
  );
}

// layer the state to props
const mapStateToProps = state => {
  return {
    products: state.products,
    categories: state.categories,
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
