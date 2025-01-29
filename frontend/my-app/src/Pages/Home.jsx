import React, { useEffect, useState } from 'react';
import './Home.css'; 
import image1 from "../assets/background2.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
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
    <div className="home">
  
      <div className="background-section">
        <img src={image1} alt="Background" className="background-image" />
        <div className="overlay">
          <div className="carousel-text">
            <h1>Welcome to Prime Video</h1>
            <p>Join Prime to watch the latest movies, TV shows, and award-winning Amazon Originals</p>
          </div>
        </div>
      </div>

      
      <div className="movie-collection">
        <h2 className="movie-heading">Movie Collection</h2>
        <div className="movies-list">
          {movies.length === 0 ? (
            <div>Loading...</div>
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
    </div>
  );
};

export default Home;
