// src/components/MovieDescription.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movies } from './MovieData';
import './MovieDescription.css';

const MovieDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-description">
      <button onClick={() => navigate('/')}>Back to Home</button>
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      {movie.trailerLink && (
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      </div>
  );
};

export default MovieDescription;
