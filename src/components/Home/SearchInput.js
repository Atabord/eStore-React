import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './searchInput.css'

function SearchInput({ products }) {
  return(
    <div className="search-container">
      <div className="search-input">
        <Icon icon={faSearch} />
        <input type="text" placeholder="Buscar Producto"/>
      </div>
      {products.length > 0 && (
        <div className="autocomplete">
          <div className="autocomplete-item">
            <p>Test</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
