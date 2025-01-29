import React, { useEffect, useState } from 'react';
import './Movies.css'; 

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div className="movies-container">
      {movies.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="movies-list">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.img} alt={movie.title} className="movie-img" />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-actor">{movie.actor}</p>
                <p className="movie-rating">Rating: {movie.Rating}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
