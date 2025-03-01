import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  mainElement,
);
