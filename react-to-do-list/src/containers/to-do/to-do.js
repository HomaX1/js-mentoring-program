import React, { Component } from 'react';
import './to-do.css';

import Title from '../../components/title/title';
import ToDoList from '../../components/to-do-list/to-do-list';

const TASKS = [
  {
    id: 1,
    text: 'Learn ReactJS',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  }
];

class ToDo extends Component {
  render() {
    const tasksList = TASKS;
    const isTasksExist = tasksList && tasksList.length > 0;

    return(
      <div className="to-do">
        <Title title="To-Do List"/>
        {isTasksExist && <ToDoList tasksList={tasksList} />}
      </div>
    );
  }
}

export default ToDo;