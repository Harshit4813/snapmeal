import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import FoodMenu from './components/food/FoodMenu';
import Cart from './components/cart/Cart';
import Payment from './components/payment/Payment';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FoodMenu} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </Router>
  );
}

export default App;