import { useState, useEffect } from 'react';
import ApplyButton from '../navbar/ApplyButton';
import Hero01 from '../../assets/Hero_01.png';
import Hero02 from '../../assets/Hero_02.png';
import Hero03 from '../../assets/Hero_03.png';

const SLIDES = [
  { image: Hero01, alt: 'Manipal University - Online Education' },
  { image: Hero02, alt: 'Manipal University - Academic Excellence' },
  { image: Hero03, alt: 'Manipal University - Shape Your Future' }
];

const HeroBanner = ({ onApplyClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero" id="home">
      <div className="carousel">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? 'active' : ''
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="slide-image"
            />
            <div className="button-overlay">
              <ApplyButton onClick={onApplyClick} />
            </div>
          </div>
        ))}

        <button
          className="carousel-nav carousel-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          className="carousel-nav carousel-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ❯
        </button>

        <div className="carousel-controls">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              className={`dot ${
                index === currentSlide ? 'active' : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
