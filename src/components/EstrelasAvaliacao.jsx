import React, { useState } from 'react';
import './StarRating.css'; 

const StarRating = ({ initialRating = 3 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingChange = (event) => {
    const selectedRating = parseInt(event.target.value);
    setRating(selectedRating);
  };

  return (
    <div className="rating">
      <input 
        type="radio" 
        id="star5" 
        name="rate" 
        value="5" 
        checked={rating === 5} 
        onChange={handleRatingChange} 
      />
      <label htmlFor="star5" title="text">
        <svg viewBox="0 0 576 512" height="0.8em" xmlns="http://www.w3.org/2000/svg" className="star-solid">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      </label>
      <input 
        type="radio" 
        id="star4" 
        name="rate" 
        value="4" 
        checked={rating >= 4} 
        onChange={handleRatingChange} 
      />
      <label htmlFor="star4" title="text">
        <svg viewBox="0 0 576 512" height="0.8em" xmlns="http://www.w3.org/2000/svg" className="star-solid">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      </label>
      <input 
        type="radio" 
        id="star3" 
        name="rate" 
        value="3" 
        checked={rating >= 3} 
        onChange={handleRatingChange} 
      />
      <label htmlFor="star3" title="text">
        <svg viewBox="0 0 576 512" height="0.8em" xmlns="http://www.w3.org/2000/svg" className="star-solid">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      </label>
      <input 
        type="radio" 
        id="star2" 
        name="rate" 
        value="2" 
        checked={rating >= 2} 
        onChange={handleRatingChange} 
      />
      <label htmlFor="star2" title="text">
        <svg viewBox="0 0 576 512" height="0.8em" xmlns="http://www.w3.org/2000/svg" className="star-solid">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      </label>
      <input 
        type="radio" 
        id="star1" 
        name="rate" 
        value="1" 
        checked={rating >= 1} 
        onChange={handleRatingChange} 
      />
      <label htmlFor="star1" title="text">
        <svg viewBox="0 0 576 512" height="0.8em" xmlns="http://www.w3.org/2000/svg" className="star-solid">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      </label>
    </div>
  );
};

export default StarRating;
