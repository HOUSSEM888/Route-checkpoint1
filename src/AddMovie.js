// src/components/AddMovie.js
import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';  // Make sure this package is installed
import './AddMovie.css';

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 1 });
  };

  return (
    <div className="add-movie">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
          required
        />
        <StarRatingComponent
          name="newMovieRating"
          starCount={5}
          value={newMovie.rating}
          onStarClick={(nextValue) => setNewMovie({ ...newMovie, rating: nextValue })}
          starColor="#ffb400"
          emptyStarColor="#333"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
