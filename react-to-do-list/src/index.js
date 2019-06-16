import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ToDoList from './components/to-do-list/to-do-list';
import Archive from './components/archive/archive';
import Edit from './components/edit/edit';
import Error from './components/error/error';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={ToDoList} />
        <Route path='/archive' component={Archive} />
        <Route path='/edit' component={Edit} />
        <Route path='*' component={Error} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
