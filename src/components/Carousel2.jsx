import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../pages/HomePage/home.css"
const ControlledCarousel2 = ({ slides }) => {
  const [index, setIndex] = useState(0);

  // Function to chunk the array into groups of 4
  function chunkArray(arr, chunkSize) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

  // Group slides into chunks of 4
  const groupedSlides = chunkArray(slides, 4);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect} 
      interval={1000}  // Set the timer here (3000ms = 3 seconds)
      pause='hover'  // Optional: Pause the slide on hover
    >
      {groupedSlides.map((group, idx) => (
        <Carousel.Item key={idx}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {group.map((slide, slideIdx) => (
              <div key={slideIdx} className="carousel-slide">
                <img  src={slide.image} alt={slide.label} />
                {/* <h3>{slide.label}</h3>
                <p>{slide.description}</p> */}
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ControlledCarousel2;
