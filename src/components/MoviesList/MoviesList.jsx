import React from 'react';

export const MoviesList = ({ movies }) => (
  <div className="movies-list">
    {movies.map(movie => (
      <div key={movie.imdbId} className="movie-card">
        <h2>{movie.title}</h2>
        <img src={movie.imgUrl} alt={movie.title} />
        <p>{movie.description}</p>
        <a href={movie.imdbUrl} target="_blank" rel="noopener noreferrer">
          View on IMDb
        </a>
      </div>
    ))}
  </div>
);
