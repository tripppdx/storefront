import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ShoppingCart() {
  return (
    <>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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
