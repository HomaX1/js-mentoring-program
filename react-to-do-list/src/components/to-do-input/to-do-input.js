import React from 'react';
import PropTypes from 'prop-types';

import './to-do-input.css';

const ToDoInput = ({ value, onChange }) => (
  <li className="list-group-item to-do-item">
    <i className="fas fa-plus"/>
    <input
      className="to-do-input"
      type="text"
      placeholder="Add a new task"
      onChange={onChange}
      value={value}
    />
  </li>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

ToDoInput.defaultProps = {
  onChange: () => {},
  value: '',
};

export default ToDoInput;