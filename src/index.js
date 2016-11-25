import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import $ from 'jquery'
// Behind the scenes, the Webpack asset manager
// will load css files specified in import statements
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want access to variable globally in the console, you
// can set it as a property of the global window object
// 👇 only do this for testing
// window.$ = $;
