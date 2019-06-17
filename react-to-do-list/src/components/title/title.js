import React from 'react';
import PropTypes from 'prop-types';

import './title.css';

const Title = ({ title }) => (
  <h1 className="h1 to-do-title">{title}</h1>
);

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: 'Simple title',
};

export default Title;