import React, {Component} from 'react';

import './archive.css';
import {archiveTask} from '../../actions/actionCreator';
import Title from '../../components/title/title';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Archive extends Component {
  static propTypes = {
    archiveTask: PropTypes.func
  };

  static defaultProps = {
    archiveTask: () => {}
  };

  render() {
    const {archive, archiveTask} = this.props;
    console.log(archive);
    return (
      <div className="archive">
        <Title title="List of archive tasks"/>
        <ul className="list-group to-do-list">

          {archive
            ? archive.map(({id, text}) => {
              return (
                <li className="list-group-item to-do-item" archiveTask={archiveTask} id={id} key={id} text={text}>
                  <span className="to-do-text">{text}</span>
                  <button type="button" className="button btn btn-outline-dark">Unarchive</button>
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
  ...state.archive,
}), {archiveTask})(Archive);