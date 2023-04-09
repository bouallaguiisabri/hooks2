import React, { useState } from 'react';

const AddMovieForm = ({ handleAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePosterURLChange = (e) => setPosterURL(e.target.value);
  const handleRatingChange = (e) => setRating(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddMovie({
      title,
      description,
      posterURL,
      rating: parseInt(rating),
    });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} required />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} required />
      </div>
      <div>
        <label htmlFor="posterURL">Poster URL:</label>
        <input type="text" id="posterURL" value={posterURL} onChange={handlePosterURLChange} required />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" value={rating} onChange={handleRatingChange} min="0" max="10" required />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;