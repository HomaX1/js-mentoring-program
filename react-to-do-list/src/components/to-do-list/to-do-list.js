import React from 'react';
import PropTypes from 'prop-types';

import './to-do-list.css';

import ToDoItem from '../to-do-item/to-do-item';
import ToDoInput from '../../components/to-do-input/to-do-input';

const ToDoList = ({tasksList}) => (
  <ul className="list-group to-do-list">
    {tasksList.map(({id, text, isCompleted}) => (
      <ToDoItem key={id} text={text} isCompleted={isCompleted}/>
    ))}
    <ToDoInput/>
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
};

ToDoList.defaultProps = {
  tasksList: [],
};

export default ToDoList;