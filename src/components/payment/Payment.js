import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@material-ui/core';

const Payment = () => {
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = async () => {
    // TODO: Implement payment processing
    console.log('Processing payment and delivery to:', address);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        Payment & Delivery
      </Typography>
      <Paper sx={{ p: 3, mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Delivery Address
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Street Address"
              name="street"
              value={address.street}
              onChange={handleAddressChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={address.city}
              onChange={handleAddressChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="State"
              name="state"
              value={address.state}
              onChange={handleAddressChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ZIP Code"
              name="zipCode"
              value={address.zipCode}
              onChange={handleAddressChange}
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Payment QR Code
        </Typography>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          {/* Add QR code component here */}
          <img src="qr-placeholder.png" alt="Payment QR Code" style={{ width: '200px' }} />
        </div>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handlePayment}
          sx={{ mt: 3 }}
        >
          Complete Order
        </Button>
      </Paper>
    </Container>
  );
};

export default Payment;