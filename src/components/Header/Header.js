import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTh, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './header.css'
import { useHistory } from 'react-router-dom';
import userService from '../../services/userService';
import { useCart } from '../Cart/cart-context';

function Header() {
  const history = useHistory();
  const { cartState } = useCart();

  const logout = () => {
    userService.logout();
    history.push("/");
  }

  return (
    <header>
      <span>La Bodega</span>
      <nav>
        <ul>
          <li className="nav-button"><Icon icon={faTh}/></li>
          <li className="nav-button cart-button">
              <Icon icon={ faShoppingCart }/>
              { cartState.nItems > 0 &&
                <div className="notificacion">
                  <span>{cartState.nItems}</span>
                </div>
              }
          </li>
          <li className="nav-button" onClick={logout}><Icon icon={ faSignOutAlt }/></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
