import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(
    ({ title, description }) =>
      `${title} ${description}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
    // eslint-disable-next-line function-paren-newline
  );

  // eslint-disable-next-line no-unused-vars
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div className="App">
      <h1>Movies</h1>

      <div className="filter">
        <input
          type="text"
          id="search-query"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search..."
        />
      </div>

      <MoviesList movies={visibleMovies} />
    </div>
  );
};
