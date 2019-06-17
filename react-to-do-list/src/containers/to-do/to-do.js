import React, { Component } from 'react';

import './to-do.css';

import Title from '../../components/title/title';
import ToDoList from '../../components/to-do-list/to-do-list';

class ToDo extends Component {

  render() {

    return(
      <div className="to-do">
        <Title title="To-Do List"/>
        <ToDoList />
      </div>
    );
  };
}

export default ToDo;