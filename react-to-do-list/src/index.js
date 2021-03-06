import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import ToDo from './containers/to-do/to-do';
import Archive from './components/archive/archive';
import Edit from './components/edit/edit';
import Error from './components/error/error';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/' component={ToDo}/>
          <Route path='/archive' component={Archive}/>
          <Route path='/edit' component={Edit}/>
          <Route path='*' component={Error}/>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
