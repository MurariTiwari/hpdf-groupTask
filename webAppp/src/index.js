import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './navbar';
import Login from './login';

ReactDOM.render(
  <Login />,
  document.getElementById('root')
);

ReactDOM.render(
  <Nav/>,
  document.getElementById('nav')
);

