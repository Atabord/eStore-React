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

function Main() {
  const { path  } = useRouteMatch();

 return(
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
 )
}

export default Main;
