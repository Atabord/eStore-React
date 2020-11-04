import React from 'react';
import './main.css';
import Header from '../Header/Header';
import Home from '../Home/Home';

function Main() {
 return(
   <>
    <Header />
    <div className="content">
      <Home/>
    </div>
   </>
 )
}

export default Main;
