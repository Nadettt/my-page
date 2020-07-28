import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Menu from './components/menu.js';
import Main from './components/main.js';
import Resume from './components/resume';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Menu />
      <Main />
      <Resume />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
