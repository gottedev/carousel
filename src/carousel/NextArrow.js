import React from 'react';
import {debounce} from 'lodash';


const NextArrow = ({nextArrowStyle, performSlideNext}) => (
  <div onClick={debounce(performSlideNext,200)} 
    style={nextArrowStyle}>
    <i className="fas fa-chevron-right fa-2x" ></i>
  </div>
  )

 export default NextArrow;