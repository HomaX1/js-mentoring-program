import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './archive.css';

import {unarchivingTask} from '../../actions/actionCreator';
import Title from '../../components/title/title';

class Archive extends Component {
  static propTypes = {
    unarchivingTask: PropTypes.func
  };

  static defaultProps = {
    unarchivingTask: () => {}
  };

  render() {
    const {archive, unarchivingTask} = this.props;

    return (
      <div className="archive">
        <Title title="List of archive tasks"/>
        <ul className="list-group to-do-list">

          {archive.length
            ? archive.map(({id, text, isCompleted}) => {
              return (
                <li className="list-group-item to-do-item" id={id} key={id}>
                  <span className="to-do-text">{text}</span>
                  <button className="button btn btn-outline-dark" type="button"
                          onClick={() => unarchivingTask({id, text, isCompleted})}>Unarchive
                  </button>
                </li>
              );
            })
            : <p className="archive__text">No archive tasks!</p>
          }

        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  archive: state.tasks.archive,
}), {unarchivingTask})(Archive);