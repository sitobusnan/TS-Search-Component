import React from 'react';
import './Search.css'; // Opcional, para estilos
import SearchField from '../components/SearchField';
import SearchCard from '../components/SearchCard';
import Footer from '../components/Footer';

const Search = () => {
  return (
    <section className="search__wrapper">
      <>
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
      </>
      <main className='search__main'>
        <SearchCard /> 
      </main>
    <aside>
        <Footer />
    </aside>
    </section>
  );
};

export default Search;