import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTh, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './header.css'
import { useHistory } from 'react-router-dom';
import userService from '../../services/userService';

function Header() {
  const history = useHistory();

  const logout = () => {
    userService.logout();
    history.push("/");
  }

  return (
    <header>
      <span>La Bodega</span>
      <nav>
        <ul>
          <li><Icon icon={faTh}/></li>
          <li><Icon icon={ faShoppingCart }/></li>
          <li onClick={logout}><Icon icon={ faSignOutAlt }/></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
