import React, {useRef} from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import './searchInput.css'

function SearchInput({ products, onSearch }) {
  const searchRef = useRef(null);

  const shouldShowOptions = () => {
    if(searchRef.current){
      return searchRef.current.value !== '';
    }
    return false;
  }

  const onKeyUp = (e) => {
    onSearch(e.target.value);
  }

  const onProductClick = (e) => {
    searchRef.current.value = e.target.innerHTML;
    onSearch(searchRef.current.value);
  }

  const deleteSearch = () =>{
    searchRef.current.value = '';
    onSearch('');
  }

  return(
    <div className="search-container">
      <div className="search-input">
        <Icon icon={faSearch} />
        <input type="text" ref={searchRef} placeholder="Buscar Producto" onKeyUp={onKeyUp}/>
        {shouldShowOptions() && (
          <Icon icon={faTimes} onClick={deleteSearch}/>
        )}
      </div>
      {products.length > 0 && shouldShowOptions() &&(
        <div className="autocomplete">
          {
            products.map((product) =>(
              <div className="autocomplete-item">
                <p onClick={onProductClick}>{product.nombre}</p>
              </div>)
            )}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
