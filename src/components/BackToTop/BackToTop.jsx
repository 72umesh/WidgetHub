import { useEffect, useState } from "react";
import "./BackToTop.css";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#f9f9f9";
  }, []);
  return (
    <div className="backToTop">
      <h1>Back To Top</h1>
      <p>
        This shows a “Back To Top” button that appears after scrolling down.
      </p>

      <div className="backToTop-container">
        <div className="contents">
          {[...Array(30)].map((_, i) => (
            <p key={i} className="para">
              This is a paragraph {i + 1}
            </p>
          ))}
        </div>

        {isVisible && (
          <button
            className="backtotop-btn"
            onClick={scrollToTop}
            data-testid="back-to-top-btn"
          >
            Back to Top
          </button>
        )}
      </div>
    </div>
  );
}
export default BackToTop;
