import React, { useState, useEffect } from "react";

const HeroImageSlider = ({ images, height = "200px", className = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 800); // Change slide every 800ms

      return () => clearInterval(interval);
    } else {
      setCurrentSlide(0);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ height }}
      >
        <div className="h-full">&nbsp;</div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height }}>
      {images.map((work, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full text-center flex items-center justify-center transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={work.image}
            className="h-full w-auto object-cover"
            alt={`Preview work ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroImageSlider;
