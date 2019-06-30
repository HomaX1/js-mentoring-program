import React from 'react';
import PropTypes from 'prop-types';

import './to-do-input.css';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
  <li className="list-group-item to-do-input-item">
    <i className="fas fa-plus"/>
    <input
      className="to-do-input"
      type="text"
      placeholder="Add a new task"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  </li>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
};

ToDoInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
};

export default ToDoInput;