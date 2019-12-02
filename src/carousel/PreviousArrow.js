/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';


const PreviousArrow = ({ previousArrowStyle, performSlidePrevious }) => (
  <div
    onClick={debounce(performSlidePrevious, 200)}
    style={previousArrowStyle}
    role="button"
  >
    <i className="fas fa-chevron-left fa-2x" />
  </div>
);

PreviousArrow.propTypes = {
  previousArrowStyle: PropTypes.shape({}).isRequired,
  performSlidePrevious: PropTypes.func.isRequired,
};

export default PreviousArrow;
