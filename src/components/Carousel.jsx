import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
      interval={1000}  // Adjust timing as necessary
      pause="hover"    // Pause when hovered
      className="cors"
      activeIndex={index}
      onSelect={handleSelect}
    >
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          {slide.image && (
            <img
              className="d-block"
              src={slide.image}
              alt={slide.title}
            />
          )}
          <div className="d-block carousel-description ">
            <h2 className="carousel-title">{slide.title}</h2> {/* Dynamic Title */}
            <p className="carousel-text">
              {slide.description}
            </p>
            <div className="carousel-signature">
              <strong>{slide.signature}</strong> {/* Dynamic Signature */}
              <span className="carousel-role">{slide.role}</span> {/* Dynamic Role */}
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
