import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NextArrow from './NextArrow';
import PreviousArrow from './PreviousArrow';
import Images from './Images';
import './Carousel.css';

function Carousel({ images, imagesToShow }) {
  const [slideIndex, setSlideIndex] = useState(0); // animation purpose
  const [prevIndex, setPrevIndex] = useState(0); // animation purpose
  const [currentSlides, setCurrentSlides] = useState([]); // slides to come on right or left click
  const [slideInfo, setSlideInfo] = useState([]); // to store initial array
  const [showPrevious, setShowPrevious] = useState(false);// to show hide previous arrow
  const [showNext, setShowNext] = useState(true);// to show hide next arrow
  const [maintainBack, setMaintainBack] = useState([]);


  const previousArrowStyle = {
    opacity: showPrevious ? 1 : 0,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
  };
  const nextArrowStyle = {
    opacity: showNext ? 1 : 0,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
  };

  const performslideNext = () => { // to move forward in slide
    if (currentSlides.length <= imagesToShow) {
      return;
    }
    if (currentSlides.length <= (imagesToShow + 1)) {
      setShowNext(false);
    }
    const mutatedCurrentSlides = [...currentSlides];
    const toMaintainBack = mutatedCurrentSlides.shift();

    setMaintainBack([...maintainBack, toMaintainBack]);

    setCurrentSlides(mutatedCurrentSlides); // to prevent next
    setShowPrevious(true);
    setPrevIndex(slideIndex);// to animate from last left point
    setSlideIndex(slideIndex - 100);
  };

  const performslidePrevious = () => { // / to move back in slide
    if ((Math.abs(slideIndex) - 100) === 0) {
      setShowPrevious(false);
    }
    if (slideIndex === 0) {
      return;
    }

    const toMaintainNextArray = [...maintainBack];
    const toMaintainNext = toMaintainNextArray.pop();
    setCurrentSlides([...currentSlides, toMaintainNext]);
    setShowNext(true);
    setPrevIndex(slideIndex);// to animate from last ledt point
    setSlideIndex(slideIndex + 100);
  };

  useEffect(() => {
    setSlideInfo(images);
    setCurrentSlides(images);
  }, [images]);


  return (
    <div className="SliderWrapper">
      <div className="Slider">
        <PreviousArrow
          performSlidePrevious={performslidePrevious}
          previousArrowStyle={previousArrowStyle}
        />
        <Images
          slideInfo={slideInfo}
          prevIndex={prevIndex}
          slideIndex={slideIndex}
          imagesToShow={imagesToShow}
        />
        <NextArrow
          performSlideNext={performslideNext}
          nextArrowStyle={nextArrowStyle}
        />
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  imagesToShow: PropTypes.number.isRequired,
};

export default Carousel;
