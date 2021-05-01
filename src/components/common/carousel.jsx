import React from 'react';
import PropTypes from 'prop-types';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = ({slides, children, className, ...other}) => {
  if (!slides.length) return null;
  
  return (
    <CarouselProvider
        totalSlides={slides.length}
        isPlaying={true}
        touchEnabled={false}
        dragEnabled={false}
        infinite={true}
        isIntrinsicHeight={true}

        className={`flex flex-col overflow-hidden relative my-5 ${className || ''}`}
        {...other}
      >
        <Slider>
          {slides.map((slide, index) => (
            <Slide key={index} index={index}>
              <Image src={slide.image} alt={slide.imageLabel} hasMasterSpinner={true} />
            </Slide>
          ))}
        </Slider>
        {children}
      </CarouselProvider>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.element,
  className: PropTypes.string
};

export default Carousel;