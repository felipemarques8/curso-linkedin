import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'red'

ReactDOM.render(
  <h1 style={{color: color}}>
    Hello, world! -- {Math.random()}
  </h1>,
  document.getElementById('root')
)