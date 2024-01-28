// App.js
import React, { useState, useEffect } from 'react';
import CountryCard from './component/XcountriesSearch';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch countries data from the API endpoint
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search for a country"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="country-grid">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <CountryCard key={country.cca2} country={country} />
          ))
        ) : (
          <p>No matching countries found</p>
        )}
      </div>
    </div>
  );
};

export default App;
