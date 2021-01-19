import React from 'react';
import './main.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useRouteMatch
} from 'react-router-dom';
import Product from '../Product/Product';
import { CartProvider } from '../Cart/cart-context';

function Main() {
  const { path  } = useRouteMatch();

 return(
   <CartProvider>
    <div className="main">
      <Header />
      <div className="content">
        <Router>
          <Switch>
            <Route exact path={path}>
              <Home/>
            </Route>
            <Route path="/producto/:nombre">
              <Product/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
   </CartProvider>
 )
}

export default Main;
