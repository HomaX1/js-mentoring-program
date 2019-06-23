import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './tabs.css';

class Tabs extends Component {

  render() {
    return (
      <nav>
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <NavLink className='nav-link' exact to='/'>To-Do list</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/archive'>Archive</NavLink>
          </li>
          {/*<li className='nav-item'>*/}
            {/*<NavLink className='nav-link nav-link-edit' to='/edit'>Edit</NavLink>*/}
          {/*</li>*/}
        </ul>
      </nav>
    )
  }
}

export default Tabs;