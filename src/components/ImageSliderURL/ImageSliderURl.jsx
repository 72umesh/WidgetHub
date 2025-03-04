import { useEffect, useState } from "react";
import "./ImageSliderURL.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function ImageSliderURL({ url, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const respose = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await respose.json();
      //   console.log(data);

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  function prevSlide() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function nextSlide() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url && url !== "") fetchImages(url);
  }, [url]);

  useEffect(() => {
    document.body.style.backgroundColor = " #E0E5EC";
  }, []);

  if (loading) {
    return <div className="loading">Loading Data....</div>;
  }
  if (error !== null) {
    return <div className="error">Error Occured</div>;
  }

  return (
    <div className="imageSliderUrl">
      <h1>Image Slider</h1>
      <p>
        A responsive component that lets users browse images with sliding
        transitions.
      </p>
      <div className="imageSliderUrl-container">
        <FiArrowLeft className="arrow arrow-left" onClick={prevSlide} />
        {images && images.length > 0
          ? images.map((image, index) => (
              <img
                key={index}
                src={image.download_url}
                alt={image.author}
                className={
                  currentSlide === index ? "image" : "image hide-image"
                }
              />
            ))
          : null}
        <div className="circle-button">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={
                    currentSlide === index
                      ? "indicator indicatorCheck"
                      : "indicator"
                  }
                ></button>
              ))
            : null}
        </div>
        <FiArrowRight className="arrow arrow-right" onClick={nextSlide} />
      </div>
    </div>
  );
}
export default ImageSliderURL;
