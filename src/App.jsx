import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const normalizedQuery = query.trim().toLowerCase();

    return (
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.description.toLowerCase().includes(normalizedQuery)
    );
  });

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div className="App">
      <h1>Movies</h1>

      <div className="filter">
        <input
          type="text"
          className="filter__input"
          placeholder="Search movies..."
          value={query}
          onChange={handleInputChange}
        />
      </div>

      <MoviesList movies={visibleMovies} />
    </div>
  );
};
