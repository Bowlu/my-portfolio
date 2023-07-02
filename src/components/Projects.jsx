import React, { useState } from 'react';
import Staytuned from '../assets/staytuned.jpg';
import Surprise from '../assets/surprise.jpg';
import Climate from '../assets/climate.jpg';
import Apply from '../assets/apply.jpg';
import Design from '../assets/design.jpg';
import Welcome from '../assets/welcome.jpg';
import Workshop from '../assets/workshop.jpg';
import Image from '../assets/screenshot.png';
import Image2 from '../assets/screenshot2.png';
import './Projects.css';

function Project () {
  const images = [Image, Image2, Climate, Workshop, Surprise, Staytuned, Apply, Welcome, Design];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }
  return (
    <div className="projects">
      <div className="slider">
        <div className="slide" style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
          {images.map((image, index) => (
            <img src={image} alt={`Slide ${index}`} key={index} />
          ))}
        </div>
        <button className="prev-button" onClick={prevSlide}>prev</button>
        <button className="next-button" onClick={nextSlide}>next</button>
      </div>
    </div>
  );
}

export default Project;