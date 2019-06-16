import React, { Fragment } from 'react';
import './App.css';

import Tabs from './components/tabs/tabs';

const App = ({ children }) => (
  <Fragment>
    <Tabs />
    {children}
  </Fragment>
);

export default App;
