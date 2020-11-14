import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import images from '../../services/imageLoaderService';
import storeService from '../../services/storeService';
import './product.css'


function Product () {
  const { nombre } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function getData () {
      setLoading(true);
      const result = await storeService.getProduct(nombre);
      setProduct(result);
      setLoading(false);
    }
    getData()
  }, [nombre]);

  useEffect(() => {
    const img = images[product.imagen];
    setImage(img);
  }, [product])

  const onBackButtonClick = () => {
    history.goBack();
  }

  if(product.nombre) {
    return (
      <>
        <h1>{product.nombre}</h1>
        <hr/>
        <div className="product-info">
          <img src={image} alt=""/>
          <div className="details">
            <p><strong>Precio:</strong> {product.precio}</p>
            <p><strong>Unidades disponibles:</strong> {product.inventario}</p>
          </div>
        </div>
        <button className="back-button" onClick={onBackButtonClick}>Atras</button>
      </>
    )
  } else if(loading){
    return(
      <h1>Cargando...</h1>
    )
  } else {
    return(
      <h1>Error 404</h1>
    )
  }
}

export default Product;
