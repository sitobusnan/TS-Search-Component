import React from 'react';
import './Search.css'; // Opcional, para estilos

const SearchField = ({ query, onSearch }) => {
  return (
    <>
      <label for="search__label" className="search">
        <input type="search" id="search" value={query}
          onChange={(e) => onSearch(e.target.value)} />
        <button className='search-button' aria-label="buscar">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </label>
      <div className="search--icon">
        <i class="fa-solid fa-microphone"></i>
      </div>
    </>
  );
};

export default SearchField;