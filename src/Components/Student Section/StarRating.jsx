import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function StarRating({ rating }) {
  const totalStars = 5;
  const numericRating = Number(rating); // ensures string "0" becomes 0

  return (
    <div className="flex gap-1 text-yellow-400 text-xl">
      {numericRating == 0
        ? Array.from({ length: totalStars }, (_, i) => (
            <FaRegStar key={i} />
          ))
        : Array.from({ length: totalStars }, (_, i) => {
            if (numericRating >= i + 1) {
              return <FaStar key={i} />;
            } else if (numericRating >= i + 0.5) {
              return <FaStarHalfAlt key={i} />;
            } else {
              return <FaRegStar key={i} />;
            }
          })}
    </div>
  );
}

export default StarRating;
