// src/App.js
// src/App.js
import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filtre';  // Adjusted import name
import MovieDescription from './MovieDescription';
import { movies as initialMovies } from './MovieData';
import AddMovie from './AddMovie';
import './AddMovie.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [showForm, setShowForm] = useState(false);

  // Filtering logic
  const filterMovies = useCallback((filters) => {
    const filteredMovies = initialMovies.filter(movie => {
      return (
        (!filters.title || movie.title.toLowerCase().includes(filters.title.toLowerCase())) &&
        (!filters.rating || movie.rating >= filters.rating)
      );
    });
    setMovies(filteredMovies);
  }, []);

  // Adding a new movie
  const addMovie = (newMovie) => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  return (
    <Router>
      <div className="app">
        <Filter onFilter={filterMovies} />
        <button onClick={() => setShowForm(prev => !prev)}>
          {showForm ? 'Hide Add Movie Form' : 'Add Movie'}
        </button>
        {showForm && (
          <AddMovie addMovie={addMovie} />
        )}
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDescription />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
