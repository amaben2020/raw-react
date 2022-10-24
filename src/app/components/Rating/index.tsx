import React, { useState } from 'react';
import styles from './styles.module.css';

// pass the value to the q1 array and update its prop with response: 1-10

const Rating = () => {
  const [ratingAndHover, setRatingAndHover] = useState({
    rating: 0,
    hover: 0,
  });

  const handleClick = (idx: number) => {
    setRatingAndHover((prev) => ({
      ...prev,
      rating: Number(idx),
    }));
  };

  const handleMouseEnter = (idx: number) => {
    setRatingAndHover((prev) => ({
      ...prev,
      hover: Number(idx),
    }));
  };
  const handleMouseLeave = (idx: number) => {
    setRatingAndHover((prev) => ({
      ...prev,
      hover: ratingAndHover.rating,
    }));
  };

  return (
    <div className={styles.starsWrapper}>
      {ratingAndHover.hover}
      {ratingAndHover.rating}
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type='button'
            key={index}
            className={
              index <= (ratingAndHover.hover || ratingAndHover.rating)
                ? 'on'
                : 'off'
            }
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <span className='star'>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
