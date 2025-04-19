import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button, Divider } from '@material-ui/core';
import { Add, Remove, Delete } from '@material-ui/icons';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const updateQuantity = (itemId, change) => {
    // TODO: Implement quantity update logic
  };

  const removeItem = (itemId) => {
    // TODO: Implement remove item logic
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography align="center">Your cart is empty</Typography>
      ) : (
        <>
          <List>
            {cartItems.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem>
                  <ListItemText
                    primary={item.name}
                    secondary={`$${item.price} x ${item.quantity}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => updateQuantity(item.id, -1)}>
                      <Remove />
                    </IconButton>
                    <IconButton onClick={() => updateQuantity(item.id, 1)}>
                      <Add />
                    </IconButton>
                    <IconButton onClick={() => removeItem(item.id)}>
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <Typography variant="h6" align="right" sx={{ mt: 2 }}>
            Total: ${calculateTotal().toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => {/* TODO: Implement checkout */}}
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;