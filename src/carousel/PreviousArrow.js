import React from 'react';
import { debounce } from 'lodash';


const PreviousArrow = ({previousArrowStyle, performSlidePrevious}) => (
  <div onClick={debounce(performSlidePrevious,200)} 
    style={previousArrowStyle}
    onKeyPress= {debounce(performSlidePrevious,200)}
  >
    <i className="fas fa-chevron-left fa-2x"></i>
  </div>
  )

 export default PreviousArrow;