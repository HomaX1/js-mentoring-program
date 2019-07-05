import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './to-do-item.css';

class ToDoItem extends Component {

  static propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    removeTask: PropTypes.func,
    archiveTask: PropTypes.func,
    editTask: PropTypes.func,
    id: PropTypes.number
  };

  static defaultProps = {
    text: '',
    isCompleted: false,
    removeTask: () => {},
    archiveTask: () => {},
    editTask: () => {},
    id: 0,
  };

  render() {
    const {text, isCompleted, removeTask, id, completeTask, archiveTask, editTask} = this.props;

    return (
      <li className="list-group-item to-do-item">
        <i onClick={() => completeTask(id)} className={isCompleted ? 'far fa-check-square' : 'far fa-square'}/>
        {isCompleted ? <span className="to-do-text"><del>{text}</del></span> :
          <span className="to-do-text">{text}</span>}
        <div className="icons">
          <Link className="icons__item edit" to="/edit" onClick={() => editTask({id, text, isCompleted})}>
            <i className="far fa-edit"/>
          </Link>
          <i className="icons__item far fa-trash-alt" onClick={() => removeTask(id)}/>
          <button type="button" onClick={() => archiveTask({id, text})}
                  className="button btn btn-outline-dark">Archive
          </button>
        </div>
      </li>
    );
  }

}

export default ToDoItem;