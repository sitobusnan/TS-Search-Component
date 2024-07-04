import React, { useState } from 'react';
import clientsData from '../data/clients.json';
import './Search.css'; // Opcional, para estilos
import SearchField from '../components/SearchField';
import SearchCard from '../components/SearchCard';
import { iconClasses } from '../components/icons/iconClasses';
import Footer from '../components/Footer';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    setQuery(value);
    if (value) {
      const filteredClients = clientsData.clients.filter(client =>
        client.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredClients);
    } else {
      setResults([]);
    }
  };

  const cardTypes = {
    'lastOpened': { name: 'Last opened', iconClass: iconClasses.headerClasses.lastOpened },
    'clients': { name: 'Clients', iconClass: iconClasses.headerClasses.clients },
    'lastUpdatedFiles': { name: 'Last updated files', iconClass: iconClasses.headerClasses.lastUpdatedFiles },
    'invoices': { name: 'Invoices and payments', iconClass: iconClasses.headerClasses.invoicesAndPayments },
    'lastExpenses': { name: 'Last expenses', iconClass: iconClasses.headerClasses.lastExpenses },
  };


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
            <SearchField query={query} onSearch={handleSearch} />
          </div>
        </header>
      </>
      <main className='search__main'>
        {results.map((client) => (
          <div key={client.id} className="client-cards">
            {Object.keys(cardTypes).map((typeKey) => (
              <SearchCard type={cardTypes[typeKey]} key={typeKey} client={client} />
            ))}
          </div>
        ))}
      </main>
    <aside>
        <Footer />
    </aside>
    </section>
  );
};

export default Search;