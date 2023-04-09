import React from 'react';

const MovieList = ({ movies, filterTitle, filterRating }) => {
  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
    );
  });

  return (
    <div>
      {filteredMovies.length > 0 ? (
        <ul>
          {filteredMovies.map((movie) => (
            <li key={movie.title}>
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              <img src={movie.posterURL} alt={movie.title} />
              <p>Rating: {movie.rating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;