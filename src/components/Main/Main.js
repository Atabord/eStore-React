import React from 'react';
import './main.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import {
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';
import Product from '../Product/Product';
import { CartProvider } from '../Cart/cart-context';
import Cart from '../Cart/Cart';

function Main() {
  const { path  } = useRouteMatch();

 return(
   <CartProvider>
    <div className="main">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path={path}>
            <Home/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/producto/:nombre">
            <Product/>
          </Route>
        </Switch>
      </div>
    </div>
   </CartProvider>
 )
}

export default Main;
