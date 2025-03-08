import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./Rating.css";

function StarRating({ noOfStars }) {
  var starArray = Array.from({ length: noOfStars });

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }
  function handleMouseHover(currentIndex) {
    setHover(currentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {starArray.map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            fontSize={35}
            className={
              index <= (hover || rating)
                ? "star-active star"
                : "star-inactive star"
            }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseHover(index)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
