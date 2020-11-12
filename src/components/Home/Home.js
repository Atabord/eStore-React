import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import storeService from '../../services/storeService';
import './home.css';
import Producto from '../Product/Product';

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function getData () {
      const result = await storeService.getProducts();
      setProductos(result);
    }
    getData()
  }, []);

  return (
    <>
      <div className="home-header">
        <h1>Catálogo de productos</h1>
        <SearchInput products={[]} onKeyPressed={() => {}} />
      </div>
      <hr/>
      <div>
        {
          productos.length
          ? productos.map((producto) => (
              <Producto producto={producto} key={producto.nombre}/>
            ))
          : <p> No hay productos en el momento</p>}
      </div>
    </>
  )
}

export default Home;
