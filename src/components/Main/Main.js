import React from 'react';
import './main.css';
import Header from '../Header/Header';
import Home from '../Home/Home';

function Main() {
 return(
   <div className="main">
    <Header />
    <div className="content">
      <Home/>
    </div>
   </div>
 )
}

export default Main;
