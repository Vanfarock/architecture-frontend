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
        className={`flex flex-col max-h-screen relative my-5 ${className || ''}`}
        {...other}
      >
        <Slider>
          {slides.map((slide, index) => (
            <Slide key={index} index={index}>
              <div className="overflow-hidden">
                <Image src={slide.image} alt={slide.imageLabel} className="object-cover h-full w-full" hasMasterSpinner={true} />
              </div>
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