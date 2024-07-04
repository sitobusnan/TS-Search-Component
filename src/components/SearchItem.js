import React from 'react';
import './SearchItem.css'; // Opcional, para estilos

const SearchItem = () => {
  return (
    <li className='search__item'>
      <div className="search__item--icon"></div>
      <div className="search__item--content">
        <p className='search__item--title'>Title</p>
        <p className='search__item--subtitle'>Subtitle</p>
        <p className='search__item--info'>Info</p>
      </div>
    </li>
  );
};

export default SearchItem;