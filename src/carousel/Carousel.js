import React, {useState, useEffect} from 'react';
import NextArrow from './NextArrow';
import PreviousArrow from './PreviousArrow';
import Images from './Images';
import './Carousel.css';


function Carousel({images, imagesToShow}) {
  
  useEffect(() => {
    setSlideInfo(images);
    setCurrentSlides(images);
  }, [images])

  let [slideIndex, setSlideIndex] = useState(0); // animation purpose
  let [prevIndex, setPrevIndex] = useState(0); // animation purpose
  let [currentSlides, setCurrentSlides] = useState([]); // slides yet to come on right or left click
  let [slideInfo, setSlideInfo] = useState([]); // to store initial array 
  let [showPrevious, setShowPrevious] = useState(false);// to show hide previous arrow
  let [showNext, setShowNext] = useState(true);// to show hide next arrow
  let [maintainBack, setMaintainBack] = useState([]);


  const previousArrowStyle = {
    opacity:showPrevious?1:0
  }
  const nextArrowStyle = {
    opacity:showNext?1:0
  }

 const performslideNext = () => {  // to move forward in slide
  if(currentSlides.length <= imagesToShow){
    return;
  }
  if(currentSlides.length <= (imagesToShow+1)){
    setShowNext(false)
  }
  let mutatedCurrentSlides = [...currentSlides];
  let toMaintainBack = mutatedCurrentSlides.shift();

  setMaintainBack([...maintainBack, toMaintainBack])

  setCurrentSlides(mutatedCurrentSlides); // to prevent next
   setShowPrevious(true);
    setPrevIndex(slideIndex)// to animate from last left point
   setSlideIndex(slideIndex - 100)
 }

 const performslidePrevious = () => { /// to move back in slide
  if((Math.abs(slideIndex)-100) === 0 ){
    setShowPrevious(false)
  }
  if(slideIndex === 0 ){
    return
  }

  let toMaintainNextArray = [...maintainBack];
  let  toMaintainNext =  toMaintainNextArray.pop()
  setCurrentSlides([...currentSlides, toMaintainNext]);
  setShowNext(true);
  setPrevIndex(slideIndex);// to animate from last ledt point
  setSlideIndex(slideIndex + 100)
 }



  return (
  <div className="SliderWrapper">
    <div className="Slider" >
      <PreviousArrow performSlidePrevious={performslidePrevious} 
        previousArrowStyle={previousArrowStyle}
     />
        <Images slideInfo={slideInfo} 
          prevIndex={prevIndex} 
          slideIndex={slideIndex}
          imagesToShow={imagesToShow}
        />
      <NextArrow performSlideNext={performslideNext} 
        nextArrowStyle={nextArrowStyle} 
      />
    </div>
  </div>
  );
}

export default Carousel;


