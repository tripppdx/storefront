import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';

function ShoppingCart(props) {
  return (
    <>
      <Container
        style={{
          border: '1px solid lightgrey',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5rem',
          width: '60%',
          padding: '2%',
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 38px',
        }}
      >
        <h3>Order Summary</h3>
        {props.cart.cart.map((item, idx) => (
          <p
            key={idx}
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <span>
              {item.name} {item.itemCount > 1 ? <>x({item.itemCount})</> : null}
            </span>
            <span>${item.price * item.itemCount}</span>
          </p>
        ))}
        <p
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <span>Total</span>
          <span>${props.cart.totalBill}</span>
        </p>
        <Box
          style={{ display: 'flex' }}
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{ display: 'grid' }}>
            <TextField required id="outlined-required" label="Full Name" />
            <TextField required id="outlined-required" label="Address" />
            <TextField required id="outlined-required" label="City" />
            <TextField required id="outlined-required" label="State" />
            <TextField required id="outlined-required" label="Zip" />
          </div>
          <div style={{ display: 'grid' }}>
            <TextField required id="outlined-required" label="Credit Card" />
            <TextField required id="outlined-required" type="date" />
            <TextField required id="outlined-required" label="cvv" />
          </div>
        </Box>
        <Button> Buy Now</Button>
      </Container>
    </>
  );
}
const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
