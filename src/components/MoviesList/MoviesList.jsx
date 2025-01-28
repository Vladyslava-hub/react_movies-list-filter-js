import React from 'react';

const MoviesList = ({ movies }) => (
  <ul>
    {movies.map((movie, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={index}>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
      </li>
    ))}
  </ul>
);

export default MoviesList;
