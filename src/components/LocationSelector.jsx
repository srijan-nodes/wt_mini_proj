import React, { useState } from 'react';

const LocationSelector = () => {
  const [recentSearches, setRecentSearches] = useState(['New York', 'Paris', 'Tokyo']);
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    setRecentSearches([...recentSearches, location]);
    setLocation('');
  };

  return (
    <div className="container">
      <h1>Location Selector</h1>
      <input 
        type="text" 
        placeholder="Search location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      <h2>Recent Searches</h2>
      <ul>
        {recentSearches.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocationSelector;
