import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTh, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './header.css'
import { Link, useHistory } from 'react-router-dom';
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
      <Link to="/">
        La Bodega
      </Link>
      <nav>
        <ul>
          <li className="nav-button">
            <Link to="/">
              <Icon icon={faTh}/>
            </Link>
            </li>
          <li className="nav-button cart-button">
            <Link to="/cart">
                <Icon icon={ faShoppingCart }/>
                { cartState.nItems > 0 &&
                  <div className="notificacion">
                    <span>{cartState.nItems}</span>
                  </div>
                }
            </Link>
          </li>
          <li className="nav-button" onClick={logout}><Icon icon={ faSignOutAlt }/></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
