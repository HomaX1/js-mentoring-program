import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './edit.css';
import {confirmEditTask} from '../../actions/actionCreator';
import Title from '../../components/title/title';
import store from '../../store';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.confirmChanges = this.confirmChanges.bind(this);
  }

  state = {
    changedText: ''
  };

  componentDidMount() {
    this.setState({
      changedText: this.props.edit.text
    })
  }

  changeTasks = (e) => {
    this.setState({
      changedText: e.target.value
    });
  };

  confirmChanges() {
    const task = {...this.props.edit, text: this.state.changedText};
    store.dispatch(confirmEditTask(task));
  }

  render() {
    const {edit} = this.props;
    const {changedText} = this.state;

    return (
      <div className="edit">
        <Title title="Edit task"/>
        <label className="edit-label" id={edit.id}>
          <input
            className="edit-input"
            type="text"
            onChange={this.changeTasks}
            value={changedText}
          />
          <span className="edit-icons">
            <Link className="edit-icons__item" to="/">
              <i className="fas fa-times"/>
            </Link>
            <Link className="edit-icons__item" to="/" onClick={this.confirmChanges}>
              <i className="fas fa-check"/>
            </Link>
          </span>
        </label>
      </div>
    )
  }
}

export default connect(state => ({
  edit: state.tasks.edit,
}), {confirmEditTask})(Edit);