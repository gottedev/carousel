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
  height:400px;
  overflow-X:hidden;
  overflow-Y:hidden;
  `;

  const Image = styled.img`
  height:200px;
  width:100%;
  box-shadow: rgba(0, 0, 0, 0.8) 3px 3px 10px inset;
  border-left:5px solid transparent;
  border-right:5px solid transparent;
  `;

  const coolBoxKeyframes = keyframes`
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
  height:400px;
  animation-name: ${coolBoxKeyframes};
  animation-duration: 700ms;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
 
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
          <Image className="Image" src={item.image} />
          <div style={textStyle}>{item.category}</div>
          <div style={textStyle}>{item.title}</div>
          <div style={textStyle}>
            {`$${item.price} per person`}
          </div>
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
