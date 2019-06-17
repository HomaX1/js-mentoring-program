import React from 'react';
import PropTypes from 'prop-types';

import './to-do-item.css';

const ToDoItem = ({ text, isCompleted, removeTask, id, completeTask }) => (
  <li className="list-group-item to-do-item">
    <i onClick={() => completeTask(id)} className={isCompleted ? 'far fa-check-square' : 'far fa-square'} />
    {isCompleted ? <span className="to-do-text"><del>{text}</del></span> : <span className="to-do-text">{text}</span>}
    <div className="icons">
      <i className="icons__item far fa-file-archive"/>
      <i className="icons__item far fa-edit"/>
      <i onClick={() => removeTask(id)} className="icons__item far fa-trash-alt"/>
    </div>
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number
};

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  removeTask: () => {},
  id: 0,
};

export default ToDoItem;