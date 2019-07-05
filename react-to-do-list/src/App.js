import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Tabs from './components/tabs/tabs';

const App = ({ children }) => (
  <Fragment>
    <Router>
      <Tabs />
      {children}
    </Router>
  </Fragment>
);

export default App;
