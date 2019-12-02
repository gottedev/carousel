/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';


const NextArrow = ({ nextArrowStyle, performSlideNext }) => (
  <div
    onClick={debounce(performSlideNext, 200)}
    style={nextArrowStyle}
    role="button"
  >
    <i className="fas fa-chevron-right fa-2x" />
  </div>
);

NextArrow.propTypes = {
  nextArrowStyle: PropTypes.shape({}).isRequired,
  performSlideNext: PropTypes.func.isRequired,
};

export default NextArrow;
