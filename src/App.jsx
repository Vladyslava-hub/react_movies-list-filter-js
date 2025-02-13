import React, { useState } from 'react';
import moviesFromJson from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromJson.filter(
    movie =>
      movie.title.toLowerCase().includes(query.toLowerCase().trim()) ||
      movie.description.toLowerCase().includes(query.toLowerCase().trim()),
  );

  return (
    <div className="app">
      <h1>Movies List</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <MoviesList movies={visibleMovies} />
    </div>
  );
};
