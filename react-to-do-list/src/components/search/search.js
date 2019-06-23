import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {searchTask} from '../../actions/actionCreator';
import './search.css';
import {connect} from 'react-redux';
import store from '../../store';

class Search extends Component {
  state = {
    search: ''
  };

  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
  };


  static defaultProps = {
    onChange: () => {
    },
    value: '',
  };

  searchTasks= (e) => {
    this.setState({
      search: e.target.value,
    });
    store.dispatch(searchTask(e.target.value.toLowerCase()));
  };

  render() {
    return (
      <div className="search">
        <label className="search-label">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onChange={this.searchTasks}
            value={this.state.search}
          />
          <i className="fas fa-search"/>
        </label>
      </div>
    );
  }
}

export default connect(state => ({
  ...state.tasks,
}))(Search);