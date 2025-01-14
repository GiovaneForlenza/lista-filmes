
import './index.scss'
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
export interface Props {
  rating: number;
}
function StarRating(props: Props) {
  const fullStars = [];
  const emptyStars = [];
  const stars = Math.round(props.rating / 2);
  for (let i = 0; i < 5; i++) {
    i < stars ? fullStars.push(i) : emptyStars.push(i);
  }

  return (
    <div className="rating">
      {fullStars.map((index) => (
        <FaStar key={index} />
      ))}
      {emptyStars.map((index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
}

export default StarRating;
