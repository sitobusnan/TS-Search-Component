import React from 'react';
import './SearchCard.css'; // Opcional, para estilos
import SearchItem from './SearchItem'

const SearchCard = () => {
  return (
    <article className='card__wrapper'>
      <header className="card__wrapper--header" for="search">
        <div>
          <i class="fa-solid fa-clock-rotate-left"></i>
        </div>
        <h2>Last opened</h2>
        <a href="#">See all</a>
      </header>
      <main>
        <ul class="search__list">
          <SearchItem  />
        </ul>
      </main>
    </article>
  );
};

export default SearchCard;