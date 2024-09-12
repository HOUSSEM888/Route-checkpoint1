// src/components/Filter.js
import React, { useState, useEffect } from 'react';
import './Filter.css';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  

  useEffect(() => {
    // Call the onFilter prop whenever title or rating changes
    onFilter({ title, rating: parseFloat(rating) || '' });
  }, [title, rating, onFilter]);

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="0" max="10" step="0.1"
      />
    </div>
  );
};

export default Filter;
