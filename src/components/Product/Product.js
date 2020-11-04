import React, { useState } from 'react';
import './product.css';
import images from '../../services/imageLoaderService';

function Producto ({ producto, onAdd }) {
  const [ cantidad, setCantidad ] = useState(1);

  const changeCantidad = (event) => {
    setCantidad(event.target.value);
  }

  const image = images[producto.imagen];

  return (
    <div className="card">
      <img src={image} alt=""/>
      <h3>{producto.nombre}</h3>
      <p><b>Precio:</b> ${producto.precio}</p>
      <p><b>Unidades disponibles:</b> {producto.inventario}</p>
      <footer>
        <button className="detailsButton">Ver Más</button>
        <div>
          <button className="addButton" onClick={() => onAdd(cantidad)} disabled={cantidad > producto.inventario}>Añadir</button>
          <input type="number" min="1" max={producto.inventario || 1} value={cantidad} onChange={changeCantidad}/>
        </div>
      </footer>
    </div>
  )
}

export default Producto;
