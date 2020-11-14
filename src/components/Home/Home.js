import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import storeService from '../../services/storeService';
import './home.css';
import Producto from '../ProductCard/ProductCard';

function Home() {
  const [productos, setProductos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const onSearch = (text) => {
    const filter = productos.filter(product => product.nombre.toLowerCase().includes(text.toLowerCase()))
    setFilteredProducts(filter);
  }

  useEffect(() => {
    async function getData () {
      const result = await storeService.getProducts();
      setProductos(result);
      setFilteredProducts(result);
    }
    getData()
  }, []);

  return (
    <>
      <div className="home-header">
        <h1>Catálogo de productos</h1>
        <SearchInput products={filteredProducts} onSearch={onSearch} />
      </div>
      <hr/>
      <div className="products-container">
        {
          filteredProducts.length
          ? filteredProducts.map((producto) => (
              <Producto producto={producto} key={producto.nombre}/>
            ))
          : <p>No hay productos en el momento</p>}
      </div>
    </>
  )
}

export default Home;
