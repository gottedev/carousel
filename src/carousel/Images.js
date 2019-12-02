import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Rating from './Rating';

const Images = ({
  slideInfo, prevIndex, slideIndex, imagesToShow,
}) => {
  const CarouselContainer = styled.div`
  display:flex;
  align-self:center;
  align-items:center;
  height:400px;
  overflow-X:hidden;
  overflow-Y:hidden;
  `;

  const Image = styled.img`
  width:100%;
  height:100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.8) 3px 3px 10px inset;
  border-left:5px solid transparent;
  border-right:5px solid transparent;
  `;

  const animateCarousel = keyframes`
  from {
    transform:translateX(${prevIndex}%);
  }
  to {
    transform:translateX(${slideIndex}%);
  }
  `;

  const ImageContainer = styled.div`
  max-width:${100 / imagesToShow}%;
  min-width:${100 / imagesToShow}%;
  animation-name: ${animateCarousel};
  height:300px;
  animation-duration: 700ms;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  `;

  const TopContainer = styled.div`
  width:100%;
  height:auto;
  `;
  // max-width:${100 / imagesToShow}%;
  // min-width:${100 / imagesToShow}%;
  const SlideContainer = styled.div`
  width:100%;
  position:relative;
  padding-top:56.25%;
  `;

  const textStyle = {
    color: '#1d1b1b',
    // lineHeight:'14px',
    wordWrap: 'wrap',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
  };

  return (
    <CarouselContainer className="CarouselContainer">
      {slideInfo.map((item, id) => (
        <ImageContainer className="ImageContainer" key={id}>
          <TopContainer>
            <SlideContainer>
              <Image className="Image" src={item.image} />
            </SlideContainer>
          </TopContainer>
          {/* <TextContainer> */}
          <div style={textStyle}>{item.category}</div>
          <div style={textStyle}>{item.title}</div>
          <div style={textStyle}>
            {`$${item.price} per person`}
          </div>
          {/* </TextContainer> */}
          <Rating starsToRender={item.reviews.rating} count={item.reviews.count} />
        </ImageContainer>
      ))}
    </CarouselContainer>
  );
};

Images.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  imagesToShow: PropTypes.node.isRequired,
  prevIndex: PropTypes.number.isRequired,
  slideInfo: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    reviews: PropTypes.shape({
      rating: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};

export default Images;
