import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

function Products(props) {
  console.log(props.products);
  return (
    <>
      <p>PRODUCTS</p>
      <Grid
        sx={{ margin: '50px 0px 0px 0px' }}
        justifyContent="center"
        container
        spacing={1}
      >
        {props.products.products.map((product, idx) => {
          return (
            <Grid key={idx} item>
              <Card>
                <Button
                  onClick={() => {
                    props.decrement(product.name);
                  }}
                >
                  Buy {product.name}!
                </Button>
                <Typography>{product.inventory}</Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

// layer the state to props
const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.products,
  };
};
// this allows actions to be pumped through our reducer.
const mapDispatchToProps = dispatch => ({
  decrement: product =>
    dispatch({ type: 'UPDATE_INVENTORY', payload: product }),
  reset: () => dispatch({ type: 'RESET_INVENTORY' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
