import React from 'react';
import { NavLink } from 'react-router-dom';
import './tabs.css';

import PropTypes from 'prop-types';

const Tabs = ({archive}) => (
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
);

Tabs.propTypes = {
  archiveTask: PropTypes.func
};

Tabs.defaultProps = {
  archiveTask: () => {}
};

export default Tabs;