import React, { useState } from 'react';
import MoviesList from './components/MoviesList';

const App = () => {
  const [query, setQuery] = useState('');

  const movies = [
    { title: 'Inception', description: 'A mind-bending thriller.' },
    { title: 'Interstellar', description: 'Exploration of space and time.' },
    { title: 'The Dark Knight', description: 'A tale of a superhero.' },
  ];

  const visibleMovies = movies.filter(movie =>
    [movie.title, movie.description].some(field =>
      // eslint-disable-next-line prettier/prettier
      field.toLowerCase().includes(query.trim().toLowerCase())));

  return (
    <div className="App">
      <input
        type="text"
        id="search-query"
        placeholder="Search for movies..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <MoviesList movies={visibleMovies} />
    </div>
  );
};

export default App;
