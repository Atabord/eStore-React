import './cart.css'
import React, { useEffect, useState } from 'react';
import { useCart } from './cart-context';
import images from '../../services/imageLoaderService';
import { Link, useHistory } from 'react-router-dom';
import storeService from '../../services/storeService';

function getTotal(items) {
  return items.reduce((previous, current) =>
    current.precio * current.cantidad + previous, 0);
}

function Cart() {
  const { cartState, resetCart } = useCart();
  const { items } = cartState;
  const [ total, setTotal ] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const result = getTotal(items);
    setTotal(result);
  }, [items]);

  const onPayClick = async () => {
    await storeService.buyProducts(items);
    resetCart();
    history.push('/');
  }

 return (
  <>
    <h1>Carrito de Compras</h1>
    <hr/>
    <div className="cart-content">
      { items && items.length > 0 ?
        <div>
          <ul className="cart-list">
            { items.map((item) =>
              <li key={item.nombre}>
                <img src={images[item.imagen]} alt={`imagen ${item.nombre}`}/>
                <div>
                  <h3>{item.nombre}</h3>
                  <p><b>Unidades:</b> {item.cantidad}</p>
                  <p><b>Subtotal:</b> {item.cantidad * item.precio}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
        : <p>El Carrito de compras está vacío</p>
      }
      <div className="cart-info">
        <h2>Total: {total}</h2>
        <div className="actions">
          <Link to="/" className="common-button">Cancelar</Link>
          <button onClick={onPayClick} className="common-button">Pagar</button>
        </div>
      </div>
    </div>
  </>
 )
}

export default Cart;
