import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container } from '@material-ui/core';

const FoodMenu = () => {
  const [foods, setFoods] = useState([]);

  // Sample food data (replace with API call later)
  useEffect(() => {
    setFoods([
      {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Classic Italian pizza with tomato and mozzarella',
        price: 12.99,
        image: 'pizza.jpg'
      },
      // Add more food items
    ]);
  }, []);

  const addToCart = (food) => {
    // TODO: Implement add to cart functionality
    console.log('Added to cart:', food);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        Our Menu
      </Typography>
      <Grid container spacing={4}>
        {foods.map((food) => (
          <Grid item key={food.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={food.image}
                alt={food.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {food.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {food.description}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  ${food.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(food)}
                  sx={{ mt: 2 }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FoodMenu;