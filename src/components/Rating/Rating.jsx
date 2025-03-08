import { useEffect } from "react";
import "./Rating.css";
import StarRating from "./StarRating";
import EmojiRating from "./EmojiRating";

function Rating() {
  useEffect(() => {
    document.body.style.backgroundColor = " #F6F0F0";
  }, []);
  return (
    <div className="rating">
      <h1>Rating</h1>
      <p>
        An interactive component that lets users give feedback using a
        star-based and text-based rating system.
      </p>

      <div className="rating-container">
        <StarRating noOfStars={10} />
        <EmojiRating />
      </div>
    </div>
  );
}

export default Rating;
