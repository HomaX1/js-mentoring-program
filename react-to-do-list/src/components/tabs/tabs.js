import React from 'react';
import { NavLink } from 'react-router-dom';
import './tabs.css';

const Tabs = () => (
  <nav>
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <NavLink className='nav-link' exact to='/'>To-Do list</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/archive'>Archive</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/edit'>Edit</NavLink>
      </li>
    </ul>
  </nav>
);

export default Tabs;