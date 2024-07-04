import React from 'react';
import './SearchCard.css'; // Opcional, para estilos
import SearchItem from './SearchItem'

const SearchCard = ({ type, client }) => {

  return (
    <article className='card__wrapper'>
      <header className="card__wrapper--header" for="search">
        <div>
          <i class={type.iconClass}></i>
        </div>
        <h2>{type.name}</h2>
        <a href="#">See all</a>
      </header>
      <main>
        <ul class="search__list">
          <SearchItem type={type} client={client} />
        </ul>
      </main>

    </article>
  );
};

export default SearchCard;