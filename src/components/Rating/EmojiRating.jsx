import { useState } from "react";
import "./Rating.css";

function EmojiRating() {
  const emojis = ["😡", "🙁", "😐", "😊", "😍"];
  const feedbackText = ["Terrible", "Bad", "Okay", "Good", "Amazing"];

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
    <div className="emoji-container">
      <div className="emojis">
        {emojis.map((_, index) => {
          index += 1;
          return (
            <span
              key={index}
              className={
                index <= (hover || rating) ? "emoji-active" : "emoji-inactive"
              }
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseHover(index)}
              onMouseLeave={handleMouseLeave}
            >
              {emojis[index - 1]}
            </span>
          );
        })}
      </div>
      <p className="texts">
        {hover
          ? feedbackText[hover - 1]
          : rating
          ? feedbackText[rating - 1]
          : "Rate Us!"}
      </p>
    </div>
  );
}

export default EmojiRating;
