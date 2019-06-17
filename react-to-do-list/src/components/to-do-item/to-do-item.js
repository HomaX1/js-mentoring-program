import React from 'react';
import PropTypes from 'prop-types';

import './to-do-item.css';

const ToDoItem = ({ text, isCompleted }) => (
  <li className="list-group-item to-do-item">
    <i className={isCompleted ? 'far fa-check-square' : 'far fa-square'} />
    {isCompleted ? <span className="to-do-text"><del>{text}</del></span> : <span className="to-do-text">{text}</span>}
    {/*<span className={isCompleted ? 'completed text' : 'text'}>{text}</span>*/}
    <div className="icons">
      <i className="icons__item far fa-file-archive"/>
      <i className="icons__item far fa-edit"/>
      <i className="icons__item far fa-trash-alt"/>
    </div>
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
};

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
};

export default ToDoItem;