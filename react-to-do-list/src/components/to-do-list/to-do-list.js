import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../store';

import './to-do-list.css';

import { fetchTask, addTask, removeTask, completeTask, archiveTask, editTask } from '../../actions/actionCreator';
import ToDoItem from '../to-do-item/to-do-item';
import ToDoInput from '../../components/to-do-input/to-do-input';

class ToDoList extends Component {

  state = {
    taskText: ''
  };

  static propTypes = {
    tasksList: PropTypes.array,
    removeTask: PropTypes.func,
    completeTask: PropTypes.func,
    archiveTask: PropTypes.func
  };

  static defaultProps = {
    tasksList: [],
    removeTask: () => {},
    completeTask: () => {},
    archiveTask: () => {}
  };

  componentDidMount() {
    if(this.props.tasks.length) {
      return;
    }

    fetch('http://localhost:3004/data')
      .then(response => response.json())
      .then(data => store.dispatch(fetchTask(data)));
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  };

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 2 && key === 'Enter') {
      const { addTask } = this.props;

      addTask((new Date()).getTime(), taskText, false);

      this.setState({
        taskText: '',
      })

    }
  };

  render() {
    const {tasks, removeTask, completeTask, searchInput, archiveTask, editTask} = this.props;
    const {taskText} = this.state;

    return (
      <ul className="list-group to-do-list">
        {tasks.map(({id, text, isCompleted}) => {
          return (text.toLowerCase().includes(searchInput))
            ? <ToDoItem completeTask={completeTask}
                        removeTask={removeTask}
                        id={id} key={id} text={text}
                        isCompleted={isCompleted}
                        archiveTask={archiveTask}
                        editTask={editTask}/>
            : '';
        })}
          {!searchInput
              ? <ToDoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText}/>
              : false
          }
      </ul>
    );

  }
}

export default connect(state => ({
  ...state.tasks
}), { addTask, removeTask, completeTask, archiveTask, editTask })(ToDoList);
