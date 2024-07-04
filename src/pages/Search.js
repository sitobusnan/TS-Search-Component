import React from 'react';
import './Search.css'; // Opcional, para estilos
import SearchField from '../components/SearchField';

const Search = () => {
  return (
    <section className="search">
    <header className='search__header'>
      <div className='search__header--wrapper'>
        <img src="public/assets/teamSystemlogo.svg" alt="" />
        <h1 className='search__header--title'>TeamSystem <span>Datahub</span></h1>
        <div className='search--wrapper'>
          <i class="fa-regular fa-bell"></i>
        </div>
      </div>
      <div className='search__header--search'>
        <SearchField />   
      </div>
    </header>
    <main>
    </main>
    <footter>


    </footter>
    </section>
  );
};

export default Search;