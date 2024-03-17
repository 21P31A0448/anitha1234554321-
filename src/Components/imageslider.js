import React, { useEffect, useState } from 'react';

const customImageStyle = {
  maxHeight: '800px', // Adjust the height as needed
};

export default function Imageslider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the index of the next slide
      const nextIndex = (activeIndex + 1) % 3;
      setActiveIndex(nextIndex);
    }, 2500); // Change slide every 3 seconds (adjust as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="false" // Disable automatic sliding
      >
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
            <img
              className="d-block w-100"
              src="caro.jpg"
              alt="First slide"
              style={customImageStyle} // Apply custom style to reduce height
            />
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
            <img
              className="d-block w-100"
              src="caro0.jpg"
              alt="Second slide"
              style={customImageStyle} // Apply custom style to reduce height
            />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
            <img
              className="d-block w-100"
              src="caro3.jpg"
              alt="Third slide"
              style={customImageStyle} // Apply custom style to reduce height
            />
          </div>
        </div>
      </div>
    </div>
  );
}
