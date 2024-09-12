// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';  // Import the star rating component
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <StarRatingComponent 
        name="movieRating"
        starCount={5}
        value={movie.rating}
        starColor="#ffd700"
        emptyStarColor="#dcdcdc"
        editing={false}  // Make stars non-editable
      />
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
