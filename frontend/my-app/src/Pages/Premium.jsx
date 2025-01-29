import React, { useEffect, useState } from 'react';
import './Premium.css'; 
import { Link } from 'react-router-dom';

const Premium = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {

    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((data) => {
   
        const filteredMovies = data.filter((movie) => parseFloat(movie.Rating) > 4.5);
        setMovies(filteredMovies);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div className="premium">
      <h2 className="premium-heading">Premium Movie Collection</h2>
      <div className="movies-list">
        {movies.length === 0 ? (
          <div>No Premium Movies Available</div>
        ) : (
          movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.img} alt={movie.title} className="movie-img" />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-actor">{movie.actor}</p>
                <p className="movie-rating">Rating: {movie.Rating}</p>
                <Link to={`/movie/${movie.id}`} className="movie-link">View Details</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Premium;
