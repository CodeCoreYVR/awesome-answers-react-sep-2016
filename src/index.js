import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Behind the scenes, the Webpack asset manager
// will load css files specified in import statements
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
