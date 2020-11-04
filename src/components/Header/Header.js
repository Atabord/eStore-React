import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTh, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './header.css'

function Header() {
  return (
    <header>
      <span>La Bodega</span>
      <nav>
        <ul>
          <li><Icon icon={faTh}/></li>
          <li><Icon icon={ faShoppingCart }/></li>
          <li><Icon icon={ faSignOutAlt }/></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
