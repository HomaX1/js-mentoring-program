import React from 'react';
import { NavLink } from 'react-router-dom';
import './tabs.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {archiveTask} from '../../actions/actionCreator';

const Tabs = ({archive}) => {
  console.log(archive, 'archive');
  return (
  <nav>
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <NavLink className='nav-link' exact to='/'>To-Do list</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/archive' archive={archive}>Archive</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/edit'>Edit</NavLink>
      </li>
    </ul>
  </nav>
)};

Tabs.propTypes = {
  archive: PropTypes.array
};

Tabs.defaultProps = {
  archive: []
};

export default connect(state => ({
  ...state.archive
}), { archiveTask })(Tabs);